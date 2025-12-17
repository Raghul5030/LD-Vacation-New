import React, { useState, useEffect } from 'react';
import { CONTACT_PHONE } from '../constants';

export const FloatingLeadForm: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Auto-open the form after 3 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    destination: '',
    days: '',
    persons: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello LD Vacation, I am planning a trip and would like a quote.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Contact:* ${formData.contact}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Duration:* ${formData.days} Days\n` +
      `*Persons:* ${formData.persons}`
    );
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isExpanded) {
    return (
      <button 
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
        aria-label="Plan a Trip"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-bold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out pr-0 group-hover:pr-2">
          Plan Your Trip
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-[350px] mx-auto md:mx-0">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-[slideUp_0.3s_ease-out]">
        {/* Header */}
        <div 
          className="bg-teal-800 p-4 flex justify-between items-center text-white cursor-pointer"
          onClick={() => setIsExpanded(false)}
        >
          <div>
            <h3 className="font-bold text-lg leading-tight">Plan Your Holiday</h3>
            <p className="text-xs text-teal-200">Get a custom quote instantly</p>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-slate-50">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Name</label>
            <input 
              type="text" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Contact Number</label>
            <input 
              type="tel" 
              name="contact" 
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
              placeholder="Your mobile number"
            />
          </div>

          <div>
             <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Destination</label>
            <input 
              type="text" 
              name="destination" 
              required
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
              placeholder="e.g. Munnar, Ooty"
            />
          </div>

           <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Total Days</label>
              <input 
                  type="number" 
                  name="days" 
                  min="1"
                  required
                  value={formData.days}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
                  placeholder="3"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Persons</label>
              <input 
                  type="number" 
                  name="persons" 
                  min="1"
                  required
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
                  placeholder="2"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
          >
            <span>Get Quote on WhatsApp</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
               <path d="M.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413 11.815 11.815 0 00-8.413-3.481C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24z"/>
            </svg>
          </button>
        </form>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};