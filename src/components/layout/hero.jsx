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
    <section className="relative w-full min-h-[90vh] overflow-hidden">
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

      {/* White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-[var(--layout-margins)] py-[var(--layout-gutter)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--layout-grid-gap)] items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-[64px] font-neulisCursive text-[#1e293b] leading-tight mb-6">
              Bridging the gap between traditional medical care & holistic wellness
            </h1>
          </div>

          {/* Logo */}
          <div className="flex justify-end">
            <img 
              src={brandLogoCombined}
              alt="UMI Wellness Center"
              className="w-auto h-[348px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
