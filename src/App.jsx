import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-[#FFEAA7]">
      <Navbar />

      <main>
        <Hero />

        <ContentRow 
          title="Tomorrow should be better than today"
          highlightedWord="today"
          underlineWord="Tommorow"
          highlightColor="bg-[#D1EAD8]"
          text="We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          reverse={false}
        />

        <ContentRow 
          title="See how we can help you progress"
          highlightedWord="See"
          underlineWord="progress"
          highlightColor="bg-[#D1EAD8]"
          text="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
          imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
          reverse={true}
        />

        <Services />
        
        <Testimonials />

        {/* Light Green Footer matching Screenshot 3 */}
        <footer className="bg-[#E2F3EC] pt-20 pb-8 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl font-normal text-gray-900 tracking-tight">
              Subscribe to <br /> our newsletter
            </h2>
            <p className="text-gray-500 text-xs">
              To make your stay special and even more memorable
            </p>
            <button className="bg-black text-white text-xs px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              Subscribe Now
            </button>
          </div>

          {/* Links Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-emerald-200/40 text-left text-xs text-gray-600">
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900 mb-3">Company</h5>
              <p className="cursor-pointer hover:text-black">Home</p>
              <p className="cursor-pointer hover:text-black">Studio</p>
              <p className="cursor-pointer hover:text-black">Service</p>
              <p className="cursor-pointer hover:text-black">Blog</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900 mb-3">Terms & Policies</h5>
              <p className="cursor-pointer hover:text-black">Privacy Policy</p>
              <p className="cursor-pointer hover:text-black">Terms & Conditions</p>
              <p className="cursor-pointer hover:text-black">Data use</p>
              <p className="cursor-pointer hover:text-black">Accessibility</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900 mb-3">Follow Us</h5>
              <p className="cursor-pointer hover:text-black">Instagram</p>
              <p className="cursor-pointer hover:text-black">LinkedIn</p>
              <p className="cursor-pointer hover:text-black">Youtube</p>
              <p className="cursor-pointer hover:text-black">Twitter</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-900 mb-3">Terms & Policies</h5>
              <p>16999 Foster ste, STE 20 Chicago, IL 60601</p>
              <p>(123) 456789000</p>
              <p className="underline cursor-pointer">info@elementum.com</p>
            </div>
          </div>

          <div className="text-center text-[10px] text-gray-400 mt-16">
            ©2026 Elementum. All rights reserved
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;