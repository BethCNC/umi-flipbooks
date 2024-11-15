import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className 
}) {
  return (
    <div className={cn(
      "relative flex items-center justify-center gap-4 p-2 rounded-lg bg-white/20 backdrop-blur-lg",
      className
    )}>
      {/* Dots container */}
      <div className="flex items-center gap-1.5 px-2 rounded-[28px] backdrop-blur-sm">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className="w-[12.2px] h-[12.2px] flex items-center justify-center"
          >
            {currentPage === index + 1 ? (
              <img 
                src="/src/assets/images/pagination-dot-dark-active.svg"
                alt={`Page ${index + 1}`}
                className="w-full h-full"
              />
            ) : (
              <img 
                src="/src/assets/images/pagination-dot-dark-inactive.svg"
                alt={`Page ${index + 1}`}
                className="w-full h-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-1">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            "w-[26px] h-[26px] min-w-[26px] p-1.5",
            currentPage === 1 && "hidden"
          )}
        >
          <ChevronLeft className="w-[15.6px] h-[15.6px]" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "w-[26px] h-[26px] min-w-[26px] p-1.5",
            currentPage === totalPages && "hidden"
          )}
        >
          <ChevronRight className="w-[15.6px] h-[15.6px]" />
        </Button>
      </div>
    </div>
  );
} 