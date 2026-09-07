import React, { useState, useRef } from 'react';
import { siteContent } from '../data/siteContent';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Briefcase, Heart, Sparkles, CheckCircle2, Send, Mail, UploadCloud, FileText, X, AlertCircle, Loader2 } from 'lucide-react';

export function CareersPage() {
  const { careers, company } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Full Stack Software Engineer',
    message: ''
  });

  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.txt'];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (e) => {
    setErrorMsg('');
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = '.' + file.name.split('.').pop().toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      setErrorMsg(`Invalid file type "${fileExt}". Allowed resume formats are: PDF, DOC, DOCX, TXT.`);
      e.target.value = '';
      setAttachedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMsg('File size exceeds the 10MB maximum limit.');
      e.target.value = '';
      setAttachedFile(null);
      return;
    }

    setAttachedFile(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in all required fields (Full Name and Email Address).');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name.trim());
      payload.append('email', formData.email.trim());
      payload.append('role', formData.role);
      payload.append('message', formData.message.trim());

      if (attachedFile) {
        payload.append('resume', attachedFile);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: payload
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit candidate profile. Please try again or email careers@pragmatto.com directly.');
      }
    } catch (err) {
      console.error('Careers form submission error:', err);
      setErrorMsg('Network or server connection error. Please try again or email careers@pragmatto.com directly.');
    } finally {
      setIsSubmitting(false);
    }
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
                Enter your details and attach your resume/CV to join the Pragmatto engineering talent pipeline.
              </p>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm font-medium animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-grow">
                  <p>{errorMsg}</p>
                </div>
                <button 
                  onClick={() => setErrorMsg('')}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-emerald-900">Application Submitted!</h4>
                <p className="text-emerald-700 text-sm">
                  Thank you for expressing interest in Pragmatto. Your candidate profile has been sent to <span className="font-bold">careers@pragmatto.com</span> and our talent team will review your submission.
                </p>
                {attachedFile && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    Attached Resume: {attachedFile.name} ({(attachedFile.size / 1024).toFixed(1)} KB)
                  </div>
                )}
                <div className="pt-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => {
                      setSubmitted(false);
                      setAttachedFile(null);
                      setErrorMsg('');
                      setFormData({
                        name: '',
                        email: '',
                        role: 'Full Stack Software Engineer',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Profile
                  </Button>
                </div>
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
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm disabled:bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm disabled:bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Target Primary Expertise
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm bg-white disabled:bg-slate-50"
                  >
                    <option>Full Stack Software Engineer</option>
                    <option>Salesforce / CRM Administration</option>
                    <option>ERP Implementation & Systems</option>
                    <option>Software QA & Automation</option>
                    <option>Data Analytics & BI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Summary / Portfolio / GitHub Link
                  </label>
                  <textarea
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Write a brief overview of your background, experience, or portfolio links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pragmatto-blue focus:border-pragmatto-blue outline-none text-sm disabled:bg-slate-50"
                  />
                </div>

                {/* Attach Resume / Files From Computer Option */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Attach Resume / CV From Computer (Optional)
                  </label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    disabled={isSubmitting}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                    id="careers-file-upload-input"
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
                        disabled={isSubmitting}
                        onClick={handleRemoveFile}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-200/60 transition-colors"
                        aria-label="Remove attached file"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="careers-file-upload-input"
                      className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 hover:border-pragmatto-blue rounded-2xl bg-slate-50/50 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-pragmatto-blue text-pragmatto-blue group-hover:text-white flex items-center justify-center mb-2 transition-colors">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-semibold text-pragmatto-navy group-hover:text-pragmatto-blue transition-colors">
                        Click to browse and attach your Resume/CV
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Allowed: PDF, DOC, DOCX, TXT (Max 10MB)
                      </p>
                    </label>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-bold mt-2"
                  icon={isSubmitting ? Loader2 : Send}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </span>
                  ) : (
                    'Submit Your Application'
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
