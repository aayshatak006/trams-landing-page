import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
      <div className="font-bold text-xl tracking-tight text-gray-900">Elementum</div>
      
      <div className="hidden md:flex gap-8 text-xs font-medium text-gray-600">
        <a href="#home" className="hover:text-black transition-colors">Home</a>
        <a href="#studio" className="hover:text-black transition-colors">Studio</a>
        <a href="#services" className="hover:text-black transition-colors">Services</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        <a href="#faqs" className="hover:text-black transition-colors">FAQs</a>
      </div>
      
      {/* Figma hamburger line icon mockup */}
      <div className="flex flex-col gap-1 cursor-pointer">
        <span className="w-6 h-0.5 bg-gray-900"></span>
        <span className="w-4 h-0.5 bg-gray-900 self-end"></span>
      </div>
    </nav>
  );
}