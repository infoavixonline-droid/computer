import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldAlert } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/config';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'System Recommendation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'System Recommendation',
        message: '',
      });
    }, 1200);
  };

  const storeDetails = [
    {
      icon: MapPin,
      title: 'PHYSICAL DEPOT',
      content: '102, Galle Road, Colombo 03, Sri Lanka',
    },
    {
      icon: Phone,
      title: 'WHATSAPP ARCHITECT LINE',
      content: `+${WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      title: 'SECURE ELECTRONIC EMAIL',
      content: 'support@apextech.lk',
    },
    {
      icon: Clock,
      title: 'OPERATIONAL TIMELINE',
      content: '9:00 AM - 9:00 PM Daily',
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#111111] pb-6 mb-12">
          <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">
            Contact Nodes
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            ESTABLISH CONNECTION
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#F5F5F5]">
                SUPPORT & ADVICE PIPELINE
              </h2>
              <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed mt-2 max-w-md">
                Have specifications questions, custom desktop workstation configuration builds, or bulk hardware inquiries? Initiate a ticket or speak with a system architect over WhatsApp.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {storeDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#111111] border border-[#222222] p-4 rounded-[4px] flex gap-3 hover:border-[#FF5A00]/25 transition-colors"
                  >
                    <div className="h-8 w-8 rounded bg-[#1A1A1A] flex items-center justify-center text-[#FF5A00] shrink-0 border border-[#222222]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-[#666666] uppercase tracking-widest">
                        {item.title}
                      </p>
                      <p className="text-xs font-semibold text-[#F5F5F5] mt-1 leading-normal break-all">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Button to WhatsApp */}
            <div className="p-6 bg-gradient-to-r from-[#1A1A1A] to-[#111111] border border-[#222222] rounded-[6px] space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#FF5A00]" />
                <span className="text-xs font-bold tracking-wider text-[#F5F5F5] uppercase">
                  DIRECT LINE CHAT
                </span>
              </div>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">
                Skip forms entirely. Click to open a direct WhatsApp chat pre-initialized with our help-desk technicians.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%21+I%27d+like+some+technical+assistance+with+some+products+on+your+website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-[4px] transition-colors"
              >
                <span>Launch WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Block: Ticketing Form */}
          <div className="bg-[#111111] border border-[#222222] p-6 sm:p-8 rounded-[8px] relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#FF5A00]/10 border border-[#FF5A00] flex items-center justify-center text-[#FF5A00] mx-auto">
                  <Send className="h-5 w-5 animate-pulse" />
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5] tracking-tight">CONNECTION SECURED</h3>
                <p className="text-xs text-[#9A9A9A] max-w-sm mx-auto leading-relaxed">
                  Thank you. Your technical support ticket has been logged inside our network pipeline. An engineer will reach out to you via your secure email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 border border-[#222222] hover:border-[#FF5A00] text-xs font-bold tracking-widest text-[#F5F5F5] hover:text-[#FF5A00] px-5 py-2 uppercase rounded-[4px] transition-colors"
                >
                  Create New Connection
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase mb-4 pb-2 border-b border-[#222222]">
                  TRANSMIT TECHNICAL INQUIRY
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name or alias"
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#FF5A00]/50 text-xs text-[#F5F5F5] p-3 outline-none rounded-[4px] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                    Secure Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@domain.com"
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#FF5A00]/50 text-xs text-[#F5F5F5] p-3 outline-none rounded-[4px] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#FF5A00]/50 text-xs text-[#F5F5F5] p-3 outline-none rounded-[4px] transition-colors cursor-pointer"
                  >
                    <option value="System Recommendation">Custom Workstation Architecting</option>
                    <option value="Product Sourcing">Specific Component Sourcing</option>
                    <option value="Warranty Status">Hardware Warranty Inquiry</option>
                    <option value="Bulk Purchase">Bulk Corporate Order</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                    Message Details / Specs Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide full description of your computing requirements..."
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#FF5A00]/50 text-xs text-[#F5F5F5] p-3 outline-none rounded-[4px] resize-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest py-3.5 rounded-[4px] transition-all disabled:opacity-50"
                >
                  <span>{loading ? 'TRANSMITTING...' : 'SEND INQUIRY'}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
