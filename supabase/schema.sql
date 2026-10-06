-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create drivers table
CREATE TABLE public.drivers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_by_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  avatar_url TEXT,
  racing_number TEXT,
  team TEXT,
  country TEXT,
  bio TEXT,
  links JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create race_results table
CREATE TABLE public.race_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  driver_id UUID REFERENCES public.drivers(id) ON DELETE CASCADE NOT NULL,
  championship TEXT,
  event TEXT,
  track TEXT,
  track_country TEXT,
  date DATE NOT NULL,
  position INTEGER,
  grid_position INTEGER,
  laps INTEGER,
  best_lap_seconds NUMERIC,
  gap_to_winner_seconds NUMERIC,
  fastest_lap BOOLEAN DEFAULT FALSE,
  dnf BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_drivers_username ON public.drivers(username);
CREATE INDEX idx_drivers_created_by ON public.drivers(created_by_id);
CREATE INDEX idx_race_results_driver_id ON public.race_results(driver_id);
CREATE INDEX idx_race_results_date ON public.race_results(date DESC);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.race_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for drivers
CREATE POLICY "Anyone can view drivers"
  ON public.drivers FOR SELECT
  USING (true);

CREATE POLICY "Users can create their own driver"
  ON public.drivers FOR INSERT
  WITH CHECK (auth.uid() = created_by_id);

CREATE POLICY "Users can update their own driver"
  ON public.drivers FOR UPDATE
  USING (auth.uid() = created_by_id);

CREATE POLICY "Users can delete their own driver"
  ON public.drivers FOR DELETE
  USING (auth.uid() = created_by_id);

-- RLS Policies for race_results
CREATE POLICY "Anyone can view race results"
  ON public.race_results FOR SELECT
  USING (true);

CREATE POLICY "Users can create race results for their driver"
  ON public.race_results FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.drivers
      WHERE drivers.id = race_results.driver_id
      AND drivers.created_by_id = auth.uid()
    )
  );

CREATE POLICY "Users can update race results for their driver"
  ON public.race_results FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.drivers
      WHERE drivers.id = race_results.driver_id
      AND drivers.created_by_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete race results for their driver"
  ON public.race_results FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.drivers
      WHERE drivers.id = race_results.driver_id
      AND drivers.created_by_id = auth.uid()
    )
  );

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_drivers_updated_at
  BEFORE UPDATE ON public.drivers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_race_results_updated_at
  BEFORE UPDATE ON public.race_results
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
