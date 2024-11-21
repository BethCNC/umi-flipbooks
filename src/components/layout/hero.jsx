const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[var(--umi-calm-blue-50)] flex items-center justify-center p-[var(--layout-margins)]">
      {/* Glass Effect Container */}
      <div 
        className="w-[1120px] min-h-[893px] rounded-[var(--radius-l)]"
        style={{
          background: 'linear-gradient(115.69deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))',
          backdropFilter: 'blur(120px)',
          opacity: '0.8',
          border: '1px solid',
          borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.28)) 1',
          boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Content Container */}
        <div className="flex flex-col justify-between h-full p-20">
          {/* Heading */}
          <h1 className="text-center font-neulis-cursive text-text-secondary text-[96px] leading-[120px]">
            Umi Wellness Center
          </h1>

          {/* Bottom Content */}
          <div className="flex justify-between items-center">
            {/* Tagline */}
            <div className="max-w-[564px]">
              <p className="font-neulis-cursive text-text-secondary text-[60px] leading-[80px]">
                Bridging the gap
                <br />
                between
                <br />
                traditional
                <br />
                medical care &
                <br />
                holistic wellness
              </p>
            </div>

            {/* Logo Container */}
            <div className="w-[202px]">
              <img
                src="/brand-logo.svg"
                alt="UMI Wellness Center"
                className="w-full h-auto"
              />
              <div className="text-center text-[60px] font-neulis-cursive text-text-secondary mt-4">
                umi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;