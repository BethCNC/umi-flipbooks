import React from 'react';
import Lottie from 'lottie-react';
import forwardsAnimation from '../../assets/images/forwards.json';
import { Button } from './button';
import { Link2, Download, Volume2, VolumeX } from 'lucide-react';

export function FlipbookPagination({ 
  onPrevPage, 
  onNextPage, 
  onDownload, 
  onCopyLink, 
  onToggleSound,
  isSoundOn 
}) {
  return (
    <div className="flex items-center justify-center gap-4 py-6 px-6">
      {/* Previous Page Button */}
      <button 
        onClick={onPrevPage}
        className="w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <div className="rotate-180 scale-75">
          <Lottie 
            animationData={forwardsAnimation}
            loop={false}
            autoplay={true}
          />
        </div>
      </button>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          size="icon"
          onClick={onDownload}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <Download className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon"
          onClick={onCopyLink}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <Link2 className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon"
          onClick={onToggleSound}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          {isSoundOn ? (
            <Volume2 className="h-4 w-4" />
          ) : (
            <VolumeX className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Next Page Button */}
      <button 
        onClick={onNextPage}
        className="w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <div className="scale-75">
          <Lottie 
            animationData={forwardsAnimation}
            loop={false}
            autoplay={true}
          />
        </div>
      </button>
    </div>
  );
}