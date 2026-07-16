import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto w-full relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-normal text-gray-900">
          <span className="bg-[#D1EAD8] px-2 py-0.5 rounded-md">What</span> our customer <br />
          says <span className="underline decoration-[#FFEAA7] decoration-2 underline-offset-4">About Us</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto bg-[#F4FDF9] border border-emerald-100/60 p-8 rounded-3xl text-center shadow-sm relative z-10">
        <span className="text-4xl text-emerald-200 block font-serif mb-2">“</span>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
          Elementum delivered the site within the time no as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hadn't used, which have also proved to be easy to use and reliable.
        </p>
        <span className="text-4xl text-emerald-200 block font-serif mt-2">”</span>
      </div>

      {/* Decorative Floating Avatars matching the layout cluster */}
      <img className="absolute left-10 top-24 w-10 h-10 rounded-full object-cover hidden md:block" src="https://i.pravatar.cc/100?img=33" alt="" />
      <img className="absolute left-40 bottom-16 w-14 h-14 rounded-full object-cover hidden md:block" src="https://i.pravatar.cc/100?img=12" alt="" />
      <img className="absolute right-12 top-20 w-12 h-12 rounded-full object-cover hidden md:block" src="https://i.pravatar.cc/100?img=47" alt="" />
      <img className="absolute right-6 bottom-4 w-16 h-16 rounded-full object-cover hidden md:block" src="https://i.pravatar.cc/100?img=60" alt="" />
    </section>
  );
}