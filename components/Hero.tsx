import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now accepting new clients for Q4
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Automate Your Business. <br />
              <span className="text-blue-600">Accelerate Growth.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help small and mid-sized companies adopt AI the right way. 
              From automating workflows to building custom AI assistants, 
              we deliver real productivity improvements in days, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200">
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                See Use Cases
                <PlayCircle size={20} />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                 <img src="https://picsum.photos/32/32?random=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                 <img src="https://picsum.photos/32/32?random=2" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                 <img src="https://picsum.photos/32/32?random=3" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Trusted by 50+ growing companies</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-3">
               <div className="relative rounded-xl overflow-hidden h-[400px]">
                  <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-multiply"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="AI Automation Dashboard" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs animate-fade-in-up">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Efficiency Gain</p>
                        <p className="text-2xl font-bold text-slate-900">+240%</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};