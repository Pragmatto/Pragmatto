import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { siteContent } from "../../data/siteContent";

export function FinalCTA({ onNavigate }) {
  const { company, homeFinalCta } = siteContent;

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden pragmatto-geo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-sky-400 border border-slate-700">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            Technology Delivery Partner
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {homeFinalCta.title}
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {homeFinalCta.content}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cyan"
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate && onNavigate("contact")}
            >
              {homeFinalCta.buttonText}
            </Button>

            <a
              href={`mailto:${company.contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-sky-400" />
              Email Us Directly ({company.contactEmail})
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2 font-medium">
            Right-sized teams • Focused delivery • U.S. Accountability
          </p>
        </div>
      </div>
    </section>
  );
}
