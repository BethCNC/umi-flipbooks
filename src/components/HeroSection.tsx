import PropTypes from "prop-types";

const HeroSection = ({ className = "", property1 = "desktop" }) => {
  return (
    <div
      className={`w-layout-breakpoint max-w-full overflow-hidden flex flex-col items-center justify-center p-layout-margins-my box-border ${className}`}
      data-property1={property1}
    >
      <section className="self-stretch shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(120px)] rounded-radius-l [background:linear-gradient(115.69deg,_rgba(255,_255,_255,_0.5),_#fff)] border-gray border-[1px] border-solid flex flex-col items-center justify-start py-layout-margins-my px-0 gap-layout-hero-space-between opacity-[0.8] text-center text-[96px] text-black font-neulis-cursive">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-layout-space-between">
          <h1 className="m-0 flex-1 relative text-inherit leading-[120px] font-bold font-[inherit]">
            Umi Wellness Center
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center py-0 px-layout-margins-mx text-left text-[48px] text-text-secondary">
          <div className="w-layout-hero-max-width-tagline h-[347px] flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 relative leading-[72px] font-medium flex items-center">{`Bridging the gap between traditional medical care & holistic wellness`}</div>
          </div>
          <div className="w-44 h-[347px] flex flex-row items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/brand-logo.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default HeroSection;
