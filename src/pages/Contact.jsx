import React, { useState, useRef } from 'react';
import { siteContent } from '../data/siteContent';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Mail, Linkedin, Send, CheckCircle2, ShieldCheck, Clock, Paperclip, UploadCloud, FileText, X } from 'lucide-react';

export function ContactPage() {
  const { company } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    serviceNeeded: 'ERP Implementation & Support',
    message: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-pragmatto-bgLight min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pragmatto-navy text-white py-16 sm:py-24 relative overflow-hidden pragmatto-geo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="dark" className="mb-4">
            Connect With Pragmatto
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Start a Conversation Today
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            Whether you need a single part-time QA tester or a full dedicated ERP / Salesforce team, our U.S. account managers are ready to help.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card space-y-6">
                <h3 className="text-2xl font-bold text-pragmatto-navy">
                  Direct Inquiries
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pragmatto-blue text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-pragmatto-blue block mb-1">
                        General & Business Inquiries
                      </span>
                      <a href={`mailto:${company.contactEmail}`} className="text-base font-bold text-pragmatto-navy hover:underline">
                        {company.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pragmatto-cyan text-pragmatto-navy flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-pragmatto-navy block mb-1">
                        Careers & Talent Applications
                      </span>
                      <a href={`mailto:${company.careersEmail}`} className="text-base font-bold text-pragmatto-navy hover:underline">
                        {company.careersEmail}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Official LinkedIn Profile
                      </span>
                      <a 
                        href={company.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold text-pragmatto-blue hover:underline"
                      >
                        Pragmatto Solutions Company Page →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Commitment */}
              <div className="bg-pragmatto-navy text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-pragmatto-cyan">
                  <Clock className="w-6 h-6" />
                  <h4 className="font-bold text-lg text-white">US Account Manager Guarantee</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every inquiry is handled directly by a U.S. Account Manager within 24 hours. We work with you to understand your exact workflow before presenting talent.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No pushy sales calls. Practical, honest advice.</span>
                </div>
              </div>

            </div>

            {/* Interactive Form with File Attachment Option */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-pragmatto-navy mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 text-sm mb-8">
                Tell us about your remote engineering or software staffing requirements. You can also attach project briefs or specs below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-emerald-900">Message & Files Received!</h4>
                  <p className="text-emerald-700 text-base">
                    Thank you for reaching out to Pragmatto Solutions. Your dedicated U.S. account manager will contact you shortly at <span className="font-bold">{formData.email}</span>.
                  </p>
                  {attachedFile && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      Attached: {attachedFile.name}
                    </div>
                  )}
                  <div className="pt-2">
                    <Button variant="secondary" size="sm" onClick={() => { setSubmitted(false); setAttachedFile(null); }}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm bg-white"
                      >
                        <option>ERP Implementation & Support</option>
                        <option>CRM & Salesforce Solutions</option>
                        <option>Software QA & Testing Staffing</option>
                        <option>Full Stack Developer Pods</option>
                        <option>Data Analytics & BI Insights</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Your Message or Staffing Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your current tech stack, team goals, or required engineer skills..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm"
                    />
                  </div>

                  {/* Attach Files From Computer Control */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Attach Files From Computer (Optional)
                    </label>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt,.zip,.png,.jpg,.jpeg"
                      className="hidden"
                      id="file-upload-input"
                    />

                    {attachedFile ? (
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-9 h-9 rounded-lg bg-pragmatto-blue text-white flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="truncate">
                            <p className="text-sm font-bold text-pragmatto-navy truncate">
                              {attachedFile.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {(attachedFile.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-200/60 transition-colors"
                          aria-label="Remove attached file"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="file-upload-input"
                        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 hover:border-pragmatto-blue rounded-2xl bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-pragmatto-blue text-pragmatto-blue group-hover:text-white flex items-center justify-center mb-2 transition-colors">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-semibold text-pragmatto-navy group-hover:text-pragmatto-blue transition-colors">
                          Click to browse and attach files from computer
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Supports PDF, DOCX, TXT, ZIP, PNG, JPG (Max 10MB)
                        </p>
                      </label>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full font-bold"
                    icon={Send}
                  >
                    Submit Request
                  </Button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
