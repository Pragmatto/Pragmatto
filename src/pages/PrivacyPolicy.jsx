import React from 'react';
import { siteContent } from '../data/siteContent';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck, Mail } from 'lucide-react';

export function PrivacyPolicyPage() {
  const { privacyPolicy, company } = siteContent;

  return (
    <div className="bg-pragmatto-bgLight min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pragmatto-navy text-white py-16 sm:py-20 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Legal Transparency
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {privacyPolicy.title}
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-pragmatto-blue shrink-0" />
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Pragmatto Solutions respects client confidentiality and candidate data privacy. We handle all technical specifications and contact info with corporate-grade security.
            </p>
          </div>

          <div className="space-y-10">
            {privacyPolicy.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 border-b border-slate-100 pb-8 last:border-0">
                <h3 className="text-2xl font-bold text-pragmatto-navy">
                  {section.heading}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
            <h4 className="text-xl font-bold text-white">Questions About Data Privacy?</h4>
            <p className="text-slate-300 text-sm">
              If you have any questions regarding how your data is handled or would like to request data deletion, contact our administrative team:
            </p>
            <a 
              href={`mailto:${company.contactEmail}`}
              className="inline-flex items-center gap-2 text-pragmatto-cyan font-bold text-base hover:underline"
            >
              <Mail className="w-5 h-5" />
              {company.contactEmail}
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
