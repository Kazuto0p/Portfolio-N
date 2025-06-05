import React from 'react';

const SpinningLogos = () => {
  const logos = [
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg', alt: 'HTML Logo', color: '#E34F26' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg', alt: 'CSS Logo', color: '#1572B6' },
    { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg', alt: 'Tailwind CSS Logo', color: '#06B6D4' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', alt: 'React Logo', color: '#61DAFB' },
    { name: 'Express', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg', alt: 'Express Logo', color: '#000000' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg', alt: 'JavaScript Logo', color: '#F7DF1E' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg', alt: 'Python Logo', color: '#3776AB' },
    { name: 'Shell Script', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnubash.svg', alt: 'Shell Script Logo', color: '#4EAA25' },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg', alt: 'PHP Logo', color: '#777BB4' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg', alt: 'SQL Logo', color: '#4479A1' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg', alt: 'MongoDB Logo', color: '#47A248' },
  ];

  return (
    <div className="py-16 px-6 bg-gray-900 overflow-hidden">
      <style jsx>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        // @keyframes iconSpin {
        //   from { transform: rotate(0deg); }
        //   to { transform: rotate(360deg); }
        // }
        
        .spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        
        .orbit-container {
          animation: orbitClockwise 15s linear infinite;
        }
        
        .icon-spin {
          animation: iconSpin 2s linear infinite;
        }
      `}</style>
      
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Technologies
      </h2>
      
      {/* Circular Arrangement with Clockwise Orbit */}
      <div className="relative w-96 h-96 mx-auto mb-16">
        {/* Outer rotating container */}
        <div className="orbit-container w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/30"></div>
          {logos.map((logo, index) => {
            const angle = (index * 360) / logos.length;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={logo.name}
                className="absolute w-16 h-16 group cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px - 32px)`,
                  top: `calc(50% + ${y}px - 32px)`,
                }}
                title={logo.name}
              >
                <div className="w-full h-full rounded-full bg-gray-800 border-2 border-gray-700 p-2 group-hover:scale-125 group-hover:border-blue-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50 icon-spin">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    style={{ filter: `brightness(0) saturate(100%) invert(1)` }}
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-xs font-semibold text-white bg-gray-900/90 px-2 py-1 rounded whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Center logo/text - stays stationary */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">UK</span>
          </div>
        </div>
      </div>
      
      {/* Alternative: Grid with Individual Spinning */}
      {/* <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-300 mb-8">Individual Tech Logos</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={`grid-${logo.name}`}
              className="group cursor-pointer"
              title={logo.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 p-3 group-hover:border-blue-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 icon-spin">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                  style={{ filter: `brightness(0) saturate(100%) invert(1)` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-blue-400 transition-colors">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SpinningLogos;