import { mockupImages } from '../data/mockup-images';
import { cn } from '@/lib/utils';

export function MockupGallery() {
  return (
    <section className="relative w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/assets/motion/hero-gradient.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/yoga-mat.png"
                alt="UMI yoga mat mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/scarf-wordmark-dark.png"
                alt="UMI scarf pattern mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/mug.png"
                alt="UMI mug mockup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/greeting-card.png"
                alt="UMI greeting card mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/hoodie-front.png"
                alt="UMI hoodie front mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/hoodie-back.png"
                alt="UMI hoodie back mockup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 3 */}
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/business-card.png"
                alt="UMI business card mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/scarf-mockup-symbol.png"
                alt="UMI scarf symbol mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/mockups/scarf-wordmark-light.png"
                alt="UMI scarf light mockup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}