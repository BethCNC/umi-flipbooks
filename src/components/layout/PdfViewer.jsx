import React, { useState, useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { FlipbookPagination } from '../ui/FlipbookPagination';
import '@react-pdf-viewer/core/lib/styles/index.css';

export function PdfViewer({ pdfUrl, title }) {
  const viewerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoundOn, setIsSoundOn] = useState(false);
  
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: [],
    toolbar: {
      fullScreen: false,
      zoom: false,
      rotateClockwise: false,
      rotateCounterclockwise: false,
      print: false,
    },
  });

  const handlePrevPage = () => {
    if (viewerRef.current && currentPage > 1) {
      viewerRef.current.setPage(currentPage - 1);
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (viewerRef.current) {
      viewerRef.current.setPage(currentPage + 1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleDownload = () => window.open(pdfUrl, '_blank');
  const handleCopyLink = () => navigator.clipboard.writeText(window.location.href);
  const handleToggleSound = () => setIsSoundOn(!isSoundOn);

  return (
    <div className="w-full">
      <div className="relative min-h-[712px] bg-[#0A0F1C] rounded-xl overflow-hidden">
        {/* Main PDF container with blur effect */}
        <div className="relative bg-[#F7F0E8]/50 backdrop-blur-sm rounded-xl overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              ref={viewerRef}
              fileUrl={pdfUrl}
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={1.2}
              className="min-h-[712px] pdf-viewer"
            />
          </Worker>
        </div>
        
        {/* Bottom blur overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ 
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(400px)',
            borderRadius: '12px',
            opacity: '0.43',
            mixBlendMode: 'soft-light',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        />
      </div>

      <FlipbookPagination 
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onDownload={handleDownload}
        onCopyLink={handleCopyLink}
        onToggleSound={handleToggleSound}
        isSoundOn={isSoundOn}
        className="mt-6"
      />
    </div>
  );
}