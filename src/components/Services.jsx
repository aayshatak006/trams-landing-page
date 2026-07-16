import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const offeringList = [
  { id: '01', category: 'Office of multiple interest content', title: 'Colaborative & partnership' },
  { id: '02', category: 'The hanger US Air force digital experimental', title: 'We talk about our weight' },
  { id: '03', category: 'Delta faucet content, social digital', title: 'Piloting digital confidence' },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto w-full" id="services">
      <div className="mb-16">
        <h2 className="text-4xl font-normal text-gray-900 leading-tight">
          What we{' '}
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-[#D1EAD8] rounded-md -rotate-1 -z-10"></span>
            can
          </span> <br />
          <span className="underline decoration-[#FFEAA7] decoration-2 underline-offset-8">offer</span> you!
        </h2>
      </div>
      
      <div className="border-t border-gray-200 divide-y divide-gray-200">
        {offeringList.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 items-center py-8 gap-4 group cursor-pointer">
            <div className="text-[11px] text-gray-400 max-w-xs leading-relaxed">
              {item.category}
            </div>
            <div className="md:col-span-2 flex justify-between items-center">
              <h4 className="text-xl font-normal text-gray-900">
                {item.title}
              </h4>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}