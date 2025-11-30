import React from 'react';
import { ArrowUpRight, Clock, TrendingUp, Zap, Users } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    title: "HR Resume Screening",
    metric: "10+ Hours Saved",
    description: "Automated candidate filtering reduced manual screening time by 90%, allowing HR to focus on interviews."
  },
  {
    title: "Sales Follow-up Bot",
    metric: "+28% Conversions",
    description: "AI-driven immediate responses and follow-ups ensured no lead was left behind, significantly boosting sales figures."
  },
  {
    title: "Marketing Automation",
    metric: "70% Faster Content",
    description: "Generated SEO blogs, social posts, and email newsletters automatically, maintaining consistency with less effort."
  },
  {
    title: "Employee Onboarding",
    metric: "2x Faster Training",
    description: "Interactive AI assistant answered new hire FAQs 24/7, reducing dependency on senior staff for basic queries."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Results, Real Growth</h2>
          <p className="text-lg text-slate-600">
            See how we've helped other businesses transform their workflows and reclaim their time with practical AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="flex items-center gap-2 mb-6">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {index === 0 && <Clock size={24} />}
                    {index === 1 && <TrendingUp size={24} />}
                    {index === 2 && <Zap size={24} />}
                    {index === 3 && <Users size={24} />}
                 </div>
              </div>
              <div className="mb-4">
                <span className="block text-3xl font-bold text-slate-900 tracking-tight mb-1">{study.metric}</span>
                <div className="h-1 w-12 bg-blue-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">{study.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
               View detailed case studies <ArrowUpRight size={18} />
             </button>
        </div>
      </div>
    </section>
  );
};