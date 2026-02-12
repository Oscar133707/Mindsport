import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  _honey: string; // Honeypot field for spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    _honey: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Vänligen ange ditt namn';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vänligen ange din e-postadress';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Vänligen ange en giltig e-postadress';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Meddelandet måste vara minst 10 tecken';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam check
    if (formData._honey) {
      return; // Silently fail if honeypot is filled
    }

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '', _honey: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5] overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10 py-12 md:py-20 lg:py-32">
        
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[36px] md:text-[42px] lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.2]">
            Kontakt
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-[1.6] px-2">
            Hör av dig till oss för att boka ett möte eller ställa frågor om våra upplägg.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto px-0 md:px-0">
          {status === 'success' ? (
            <div className="bg-green-900/20 border border-green-800 rounded-2xl p-10 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-900/30 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-800">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tack!</h3>
              <p className="text-gray-300 mb-8">Ditt meddelande har skickats. Vi återkommer till dig så snart vi kan.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-green-400 font-medium hover:text-green-300 underline underline-offset-4"
              >
                Skicka ett nytt meddelande
              </button>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 md:space-y-[25px]" method="POST" noValidate>
              
              {/* Honeypot field (hidden) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_honey">Don't fill this out if you're human:</label>
                <input
                  type="text"
                  id="_honey"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                  Namn <span className="text-[#ffcb33]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ditt för- och efternamn"
                  className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg bg-[#f0f0f0] text-gray-900 border-2 text-base min-h-[48px] ${
                    errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#ffcb33] focus:ring-[#ffcb33]/20'
                  } outline-none focus:ring-2 transition-all duration-200 placeholder-gray-500`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  style={{ fontSize: '16px', WebkitTapHighlightColor: 'transparent' }}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 md:mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                  E-post <span className="text-[#ffcb33]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="namn@exempel.se"
                  className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg bg-[#f0f0f0] text-gray-900 border-2 text-base min-h-[48px] ${
                    errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#ffcb33] focus:ring-[#ffcb33]/20'
                  } outline-none focus:ring-2 transition-all duration-200 placeholder-gray-500`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  style={{ fontSize: '16px', WebkitTapHighlightColor: 'transparent' }}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 md:mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv ditt meddelande här..."
                  className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg bg-[#f0f0f0] text-gray-900 border-2 text-base min-h-[120px] ${
                    errors.message ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#ffcb33] focus:ring-[#ffcb33]/20'
                  } outline-none focus:ring-2 transition-all duration-200 placeholder-gray-500 resize-y`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  style={{ fontSize: '16px', WebkitTapHighlightColor: 'transparent' }}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 md:mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4 md:pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#ffcb33] text-[#1a1a1a] font-semibold text-lg py-4 h-[56px] rounded-lg shadow-lg hover:bg-[#e6b82e] active:bg-[#d4a626] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-[#ffcb33]"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {status === 'submitting' ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Kontakta mig</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <div className="bg-red-900/20 border border-red-800 text-red-300 p-4 rounded-lg text-center text-sm">
                  Något gick fel. Vänligen försök igen senare eller maila oss direkt på info@mindsport.se
                </div>
              )}
            </form>
          )}

          {/* Simple footer contact info */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-700 text-center text-gray-400 text-sm md:text-base space-y-2 leading-[1.6]">
            <p>Eller maila oss direkt på <a href="mailto:info@mindsport.se" className="text-[#ffcb33] hover:underline active:underline" style={{ WebkitTapHighlightColor: 'transparent' }}>info@mindsport.se</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;