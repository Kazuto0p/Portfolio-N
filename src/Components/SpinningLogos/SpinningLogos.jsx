import React, { useEffect, useState } from 'react';

const SpinningLogos = () => {
  const logos = [
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg', alt: 'HTML Logo' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg', alt: 'CSS Logo' },
    { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg', alt: 'Tailwind CSS Logo' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', alt: 'React Logo' },
    { name: 'Express', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg', alt: 'Express Logo' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg', alt: 'JavaScript Logo' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg', alt: 'Python Logo' },
    { name: 'Shell Script', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnubash.svg', alt: 'Shell Script Logo' },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg', alt: 'PHP Logo' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg', alt: 'SQL Logo' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg', alt: 'MongoDB Logo' },
  ];

  const [dimensions, setDimensions] = useState({ radius: 150, iconSize: 64 });

  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth = Math.min(window.innerWidth * 0.85, 400); // 85% of viewport, max 400px
      const newRadius = containerWidth * 0.4; // 40% of container width
      const newIconSize = Math.min(containerWidth * 0.15, 48); // Scale icon size, max 48px
      setDimensions({ radius: newRadius, iconSize: newIconSize });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="py-12 px-4 bg-gray-900">
      <style jsx>{`
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .orbit-container {
          animation: orbitClockwise 15s linear infinite;
        }
        
        @media (max-width: 640px) {
          .logo-name {
            font-size: 0.7rem !important;
            bottom: -1.8rem !important;
          }
          .center-logo {
            font-size: 1.5rem !important;
          }
        }

        @media (max-width: 400px) {
          .logo-name {
            font-size: 0.6rem !important;
            bottom: -1.5rem !important;
          }
          .center-logo {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Technologies
      </h2>
      
      {/* Circular Arrangement with Clockwise Orbit */}
      <div
        className="relative mx-auto"
        style={{
          width: `min(85vw, 400px)`,
          height: `min(85vw, 400px)`,
        }}
      >
        {/* Outer rotating container */}
        <div className="orbit-container w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/30"></div>
          {logos.map((logo, index) => {
            const angle = (index * 360) / logos.length;
            const x = Math.cos((angle * Math.PI) / 180) * dimensions.radius;
            const y = Math.sin((angle * Math.PI) / 180) * dimensions.radius;
            
            return (
              <div
                key={logo.name}
                className="absolute group cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px - ${dimensions.iconSize / 2}px)`,
                  top: `calc(50% + ${y}px - ${dimensions.iconSize / 2}px)`,
                  width: `${dimensions.iconSize}px`,
                  height: `${dimensions.iconSize}px`,
                }}
                title={logo.name}
              >
                <div className="w-full h-full rounded-full bg-gray-800 border-2 border-gray-700 p-2 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    style={{ filter: `brightness(0) saturate(100%) invert(1)` }}
                  />
                </div>
                <div className="absolute logo-name left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
          <div
            className="center-logo rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
            style={{
              width: `${dimensions.iconSize * 1.5}px`,
              height: `${dimensions.iconSize * 1.5}px`,
            }}
          >
            <span className="text-xl font-bold text-white">UK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningLogos;