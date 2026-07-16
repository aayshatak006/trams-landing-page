import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 px-6 text-center max-w-4xl mx-auto z-10">
      <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900">
        The{' '}
        <span className="relative inline-block px-3 py-1 mx-1">
          <span className="absolute inset-0 bg-[#FFEAA7] rounded-full -rotate-1 -z-10"></span>
          thinkers
        </span>{' '}
        and <br className="hidden md:block"/>
        doers were{' '}
        <span className="relative inline-block px-4 py-1 mx-1">
          <span className="absolute inset-0 bg-[#FFD3E8] rounded-full rotate-1 -z-10"></span>
          changing
        </span> <br />
        the{' '}
        <span className="relative inline-block px-4 py-1 mx-1">
          <span className="absolute inset-0 bg-[#D1EAD8] rounded-full -rotate-2 -z-10"></span>
          status
        </span>{' '}
        Quo with
      </h1>
      
      <p className="text-gray-500 max-w-md mx-auto mt-8 text-sm md:text-base leading-relaxed">
        Never structural strategies navigate communicative resources dynamic signature designs to achieve the progress standard when you start to play things style.
      </p>

      {/* Overlapping Avatars Grid */}
      <div className="flex justify-center items-center -space-x-4 mt-12">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            className="w-14 h-14 rounded-full border-4 border-[#FAFAFA] object-cover shadow-sm transition-transform hover:scale-105"
            src={`https://i.pravatar.cc/150?img=${num + 8}`}
            alt="Team cluster"
          />
        ))}
      </div>
    </section>
  );
}