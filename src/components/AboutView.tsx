import React from 'react';
import { Cpu, Terminal, Users, Award, ShieldCheck } from 'lucide-react';

export const AboutView: React.FC = () => {
  const stats = [
    { value: '500+', label: 'TECH SYSTEMS ACTIVE' },
    { value: '10,000+', label: 'HAPPY CLIENTS' },
    { value: '3-YEAR', label: 'WARRANTY STANDARD' },
    { value: '24/7', label: 'SUPPORT COVERAGE' },
  ];

  const coreValues = [
    {
      icon: Terminal,
      title: 'ENGINEERING DNA',
      desc: 'We are system builders, software developers, and engineering purists first. We select components with obsessive care.',
    },
    {
      icon: Users,
      title: 'CLIENT INTELLIGENCE',
      desc: 'We map workloads directly to computing specifications. We do not sell hardware; we deliver throughput, frames, and peace of mind.',
    },
    {
      icon: Award,
      title: 'UNIFIED QUALITY',
      desc: 'No refurbished blocks, no grey-market components. Every item in our store comes from verified official channel routes.',
    },
  ];

  const partners = ['INTEL', 'AMD', 'NVIDIA', 'ASUS', 'CORSAIR', 'MSI'];

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#111111] pb-6 mb-12">
          <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">
            Apex Philosophy
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            ABOUT OUR ARCHITECTURE
          </h1>
        </div>

        {/* Narrative & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
              WE SUPPLY THE HARDWARE THAT POWERED YOUR NEXT BIG IDEAS.
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
              Founded by hardware enthusiasts and system architects, APEX_TECH was created to satisfy a single, simple need: providing the highest-tier, guaranteed genuine computing hardware in Sri Lanka with complete spec transparency.
            </p>
            <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
              We reject off-the-shelf compromises. Whether we are assembling a custom Mini-ITX rendering machine, configuring an AMD Threadripper server, or sending out a high-refresh monitor, every component undergoes standard rigour testing prior to delivery. We understand that milliseconds dictate victory and compilations command schedules.
            </p>
            <div className="flex items-center gap-3 bg-[#111111] border border-[#222222] p-4 rounded-[4px] max-w-md">
              <ShieldCheck className="h-6 w-6 text-[#FF5A00] shrink-0" />
              <p className="text-[11px] font-mono text-[#F5F5F5] leading-relaxed">
                Authorized retail partner for absolute genuine parts. Supported by certified hardware warranty schemes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#FF5A00]/5 blur-3xl rounded-full" />
            <div className="relative border border-[#222222] bg-[#111111] p-6 rounded-[8px]">
              <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-4">
                <span className="text-[9px] font-mono text-[#666666]">BUILD_ID: APX-998</span>
                <span className="h-2 w-2 rounded-full bg-[#FF5A00] animate-pulse" />
              </div>
              <p className="text-xs font-mono text-[#FF5A00] mb-2">$ cat apex_manifest.json</p>
              <pre className="text-[10px] font-mono text-[#9A9A9A] overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`{
  "brand": "APEX_TECH",
  "vision": "Provide high-grade infrastructure for developers & gamers",
  "provenance": "Colombo, Sri Lanka",
  "quality_assurance": "100% Genuine, 3-Year Warranty Support",
  "testing_protocol": "24-Hour Prime95 Stress testing prior to delivery"
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#222222] p-6 text-center rounded-[4px] relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FF5A00] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5A00] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#9A9A9A]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars / Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">How We Operate</p>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F5] mt-1">CORE INTEGRITY PILLARS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="bg-[#111111] border border-[#222222] p-6 rounded-[6px] hover:border-[#FF5A00]/20 transition-all">
                  <div className="h-10 w-10 rounded-[4px] bg-[#1A1A1A] border border-[#222222] flex items-center justify-center text-[#FF5A00] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] mb-2 uppercase">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Strip */}
        <div className="border-t border-[#111111] pt-12 text-center">
          <p className="text-[10px] font-mono tracking-widest text-[#666666] uppercase mb-6">
            Supported Hardware Vendors
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-40">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xs font-mono font-bold tracking-[0.25em] text-[#F5F5F5] hover:text-[#FF5A00] hover:opacity-100 transition-colors duration-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
