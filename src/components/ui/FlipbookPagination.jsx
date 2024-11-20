import React from 'react';
import { Button } from './button';
import { Link2, Download, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import Lottie from 'lottie-react';

export function FlipbookPagination({ 
  currentPage, 
  totalPages,
  onPrevPage, 
  onNextPage, 
  onDownload, 
  onCopyLink, 
  onToggleSound,
  isSoundOn,
  className,
  forwardsAnimation 
}) {
  return (
    <div className={cn(
      "flex items-center justify-between gap-4 py-4 px-6",
      "bg-white/80 backdrop-blur-sm rounded-xl shadow-lg",
      className
    )}>
      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <Button 
          onClick={onPrevPage}
          variant="ghost" 
          size="icon"
          className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white/95"
        >
          <span className="text-2xl font-bold">«</span>
        </Button>
        
        <div className="flex items-center px-4">
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>

        <Button 
          onClick={onNextPage}
          variant="ghost" 
          size="icon"
          className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white/95"
        >
          <span className="text-2xl font-bold">»</span>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onDownload}
          className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white/95"
        >
          <Download className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onCopyLink}
          className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white/95"
        >
          <Link2 className="h-5 w-5" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon"
          onClick={onToggleSound}
          className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white/95"
        >
          {isSoundOn ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </Button>

        {/* Lottie Animation */}
        <div className="w-24 h-24">
          <Lottie 
            animationData={forwardsAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
}