import { useEffect, useRef } from 'react';
import brandLogoCombined from '../../assets/images/brand-logo-combined.svg';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/assets/motion/hero-gradient.mp4" type="video/mp4" />
      </video>

      {/* Content Container with Fixed Padding */}
      <div className="relative z-10 w-full min-h-screen flex">
        {/* Fixed Padding Container */}
        <div className="m-[80px] w-full">
          {/* Glass Card */}
          <div className="w-full h-full glass-card p-[80px] flex flex-col">
            {/* Title */}
            <h1 className="text-[96px] font-bold leading-[120px] text-center">
              Umi Wellness Center
            </h1>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Content Row */}
            <div className="flex justify-between items-center">
              {/* Tagline Container with Max Width */}
              <div className="w-[467px]">
                <p className="text-[48px] leading-[72px] font-medium text-text-secondary">
                  Bridging the gap between traditional medical care & holistic wellness
                </p>
              </div>

              {/* Logo */}
              <div className="w-[177px] flex-shrink-0">
                <img
                  src={brandLogoCombined}
                  alt="UMI Wellness Center"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
