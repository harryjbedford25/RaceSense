import { Toaster } from "@/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { AuthProvider, useAuth } from '@/AuthContext';
import UserNotRegisteredError from '@/UserNotRegisteredError';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Legal from './Legal';
import Contact from './Contact';
import About from './About';
import Social from './Social';
import Updates from './Updates';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/social" element={<Social />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthProvider>
        <AuthenticatedApp />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;