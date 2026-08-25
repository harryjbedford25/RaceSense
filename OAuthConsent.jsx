import React from "react";
import { ShieldCheck } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";

// OAuth consent page - backend integration removed
export default function OAuthConsent() {
  return (
    <AuthLayout icon={ShieldCheck} title="OAuth Consent">
      <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
        OAuth consent functionality has been removed as backend integration was migrated.
      </div>
    </AuthLayout>
  );
}
