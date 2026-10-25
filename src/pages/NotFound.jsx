import React from "react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/common/SEO";
import { ArrowLeft, Home, Layers, Mail } from "lucide-react";

export function NotFoundPage({ onNavigate }) {
  return (
    <div className="bg-white min-h-[75vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Page Not Found (404) | Pragmatto Solutions"
        description="The requested page could not be found on Pragmatto Solutions. Explore our services or return to the homepage."
        noindex={true}
      />

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Badge variant="blue">404 Error</Badge>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          The link you followed may be broken, or the page may have been moved.
          You can return to the homepage or explore our technology services below.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="md"
            icon={Home}
            onClick={() => onNavigate && onNavigate("home")}
            className="shadow-glow-blue font-bold"
          >
            Back to Home
          </Button>

          <Button
            variant="secondary"
            size="md"
            icon={Layers}
            onClick={() => onNavigate && onNavigate("services")}
            className="font-semibold"
          >
            View Services
          </Button>

          <Button
            variant="secondary"
            size="md"
            icon={Mail}
            onClick={() => onNavigate && onNavigate("contact")}
            className="font-semibold"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
