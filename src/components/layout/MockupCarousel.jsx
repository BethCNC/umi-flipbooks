import { useState } from 'react';
import { Pagination } from '../ui/Pagination';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import Lottie from 'lottie-react';
import pressHereAnimation from '../../assets/images/press-here.json';

export function MockupCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const mockupImages = [
    'mug',
    'business-card',
    'greeting-card',
    'scarf-mockup-symbol',
    'yoga-mat',
    'hoodie-front',
    'hoodie-back',
    'pin',
    'scarf-wordmark-dark',
    'scarf-wordmark-light',
    'insta-square-blue',
    'insta-square-dark',
    'insta-story'
  ];

  return (
    <section className="w-full bg-[#F7F0E8]">
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 py-20">
          <div className="mb-12">
            <h2 className="font-neulis-cursive text-[96px] leading-[120px] text-surface-secondary-action font-semibold">
              Brand Mockups
            </h2>
          </div>
          
          <div className="mb-10">
            <p className="font-neulis-cursive text-[48px] leading-[72px] text-surface-secondary-action font-medium">
              Scroll through the images below to see several examples of how the brand could be used in the real world.
            </p>
          </div>

          <div className="relative w-full">
            <div className="w-full rounded-border-radius-md overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)]">
              <div className="w-full responsive-image-container">
                <img 
                  src={`/src/assets/images/mockups/${mockupImages[currentPage - 1]}.png`}
                  alt={`UMI ${mockupImages[currentPage - 1]} mockup`}
                  className={cn(
                    "w-full object-contain",
                    "aspect-content md:aspect-single lg:aspect-hero"
                  )}
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="relative flex items-center gap-4 p-2 rounded-lg bg-white/20 backdrop-blur-lg">
                <Button 
                  variant="secondary"
                  size="icon"
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  className={cn(
                    "w-[26px] h-[26px] min-w-[26px] p-1.5",
                    currentPage === 1 && "hidden"
                  )}
                >
                  <ChevronLeft className="w-[15.6px] h-[15.6px]" />
                </Button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: mockupImages.length }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className="w-[12.2px] h-[12.2px] flex items-center justify-center"
                    >
                      <img 
                        src={currentPage === index + 1 
                          ? "/src/assets/images/pagination-dot-dark-active.svg"
                          : "/src/assets/images/pagination-dot-dark-inactive.svg"
                        }
                        alt={`Page ${index + 1}`}
                        className="w-full h-full"
                      />
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => currentPage < mockupImages.length && setCurrentPage(currentPage + 1)}
                    className={cn(
                      "w-[26px] h-[26px] min-w-[26px] p-1.5",
                      currentPage === mockupImages.length && "hidden"
                    )}
                  >
                    <ChevronRight className="w-[15.6px] h-[15.6px]" />
                  </Button>
                  <div className="absolute -top-16 right-[-22px] overflow-visible z-50">
                    <div className="overflow-visible">
                      <Lottie 
                        animationData={pressHereAnimation}
                        className="w-[60px] h-[60px]"
                        loop={true}
                        autoplay={true}
                        rendererSettings={{
                          preserveAspectRatio: 'xMidYMid slice'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 