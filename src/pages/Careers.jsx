import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Briefcase, Heart, Sparkles, CheckCircle2, Send, Mail } from 'lucide-react';

export function CareersPage() {
  const { careers, company } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Full Stack Engineer',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-pragmatto-bgLight min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pragmatto-navy text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {careers.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            {careers.subtitle}
          </p>
        </div>
      </section>

      {/* Culture & Open Roles */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Culture Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-card mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge variant="blue">Work Culture</Badge>
                <h2 className="text-3xl font-extrabold text-pragmatto-navy">
                  Work Culture & Ongoing Upskilling
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                  {careers.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-pragmatto-navy">
                    <Heart className="w-5 h-5 text-pragmatto-blue" />
                    <span>Wellness & Flexibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-pragmatto-navy">
                    <Sparkles className="w-5 h-5 text-pragmatto-cyan" />
                    <span>Continuous Training</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-pragmatto-navy">
                    <Briefcase className="w-5 h-5 text-pragmatto-blue" />
                    <span>100% Full-Time Employment</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-blue-50/80 p-6 rounded-2xl border border-blue-100 text-center space-y-3">
                <Mail className="w-8 h-8 text-pragmatto-blue mx-auto" />
                <h4 className="font-bold text-pragmatto-navy text-base">Talent Pool Submission</h4>
                <p className="text-slate-600 text-xs">
                  Looking for engineer work? Join our talent pool for future consideration.
                </p>
                <a 
                  href={`mailto:${company.careersEmail}`} 
                  className="inline-block text-pragmatto-blue font-bold text-sm hover:underline"
                >
                  {company.careersEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-pragmatto-navy">Submit Your Candidate Profile</h3>
              <p className="text-slate-600 text-sm mt-1">
                Enter your details to join the Pragmatto engineering talent pipeline.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-emerald-900">Application Submitted!</h4>
                <p className="text-emerald-700 text-sm">
                  Thank you for expressing interest in Pragmatto. Our talent team will review your submission and reach out.
                </p>
                <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                  Submit Another Profile
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Target Primary Expertise
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm bg-white"
                  >
                    <option>Salesforce / CRM Administration</option>
                    <option>ERP Implementation & Systems</option>
                    <option>Software QA & Automation</option>
                    <option>Full Stack Software Engineer</option>
                    <option>Data Analytics & BI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Summary / Portfolio / GitHub Link
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write a brief overview of your background, experience, or portfolio links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={Send}
                >
                  Submit Your Application
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
