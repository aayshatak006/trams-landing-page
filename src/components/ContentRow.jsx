import React from 'react';

export default function ContentRow({ title, highlightedWord, underlineWord, highlightColor, text, imageSrc, reverse }) {
  const renderTitle = () => {
    return (
      <h3 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
        {title.split(' ').map((word, idx) => {
          // Clean punctuation for matching
          const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
          
          if (cleanWord.toLowerCase() === highlightedWord.toLowerCase()) {
            return (
              <span key={idx} className="relative inline-block px-2 mx-1 font-medium">
                <span className={`absolute inset-0 ${highlightColor} rounded-md -rotate-1 -z-10`}></span>
                {word}{' '}
              </span>
            );
          }
          
          if (cleanWord.toLowerCase() === underlineWord.toLowerCase()) {
            return (
              <span key={idx} className="inline-block mx-1 underline decoration-amber-600 decoration-1 underline-offset-4">
                {word}{' '}
              </span>
            );
          }
          
          return word + ' ';
        })}
      </h3>
    );
  };

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-16 py-16 px-6 max-w-5xl mx-auto relative z-10`}>
      
      {/* Figma Circle Image Container with Floating Accent Geometric Shapes */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          
          {/* Background Decorative Shape Mockups */}
          {reverse ? (
            <div className="absolute -bottom-4 -left-4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-red-400 rotate-12 -z-10"></div>
          ) : (
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-400 rotate-45 -z-10"></div>
          )}

          {/* Masked Circular Image Frame */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-gray-100">
            <img 
              src={imageSrc} 
              alt="Section Showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Content Block */}
      <div className="w-full md:w-1/2 space-y-4 max-w-md text-left">
        {renderTitle()}
        <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
        
        <div className="pt-2">
          <a href="#readmore" className="text-[11px] font-medium text-gray-900 flex items-center gap-1 group">
            <span>Read more</span>
            <span className="h-px w-12 bg-gray-400 group-hover:w-16 transition-all inline-block self-center ml-1"></span>
          </a>
        </div>
      </div>

    </div>
  );
}