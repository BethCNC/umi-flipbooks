import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { cn } from '@/lib/utils';
import { BookOpen, FileText } from 'lucide-react';

// PDF Viewer component that shows when PDF view is selected
const PDFViewer = ({ pdfUrl }) => {
  return (
    <iframe
      src={pdfUrl}
      className="w-full h-[600px] rounded-lg border border-umi-calm-blue-200"
      title="PDF Viewer"
    />
  );
};

// FlipBook component that shows when Interactive view is selected
const FlipBook = ({ pdfUrl, previewGif }) => {
  const bookRef = useRef();

  return (
    <div className="flipbook-container relative">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        ref={bookRef}
      >
        {/* Add your pages here - this is a simplified example */}
        <div className="page">
          <img 
            src={previewGif} 
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more pages as needed */}
      </HTMLFlipBook>

      <div className="viewer-controls">
        <button 
          onClick={() => bookRef.current.pageFlip().flipPrev()}
          className="control-button"
        >
          Previous
        </button>
        <button 
          onClick={() => bookRef.current.pageFlip().flipNext()}
          className="control-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main ResourceViewer component that manages view mode
export const ResourceViewer = ({ title, description, pdfUrl, coverImage, previewGif }) => {
  const [viewMode, setViewMode] = useState('flipbook');

  return (
    <div className="resource-section w-full bg-umi-calm-blue-50/50 rounded-2xl p-8 mb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-neulisSans text-umi-rest-navy-500 mb-2">
            {title}
          </h2>
          <p className="text-umi-rest-navy-400 font-neulisSans text-sm">
            {description}
          </p>
        </div>
        
        {/* View Mode Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('flipbook')}
            className={cn(
              "px-4 py-2 rounded-lg flex items-center gap-2 transition-all",
              "text-sm font-neulisSans",
              viewMode === 'flipbook' 
                ? 'bg-umi-calm-blue-200 text-umi-rest-navy-500' 
                : 'hover:bg-umi-calm-blue-100 text-umi-rest-navy-400'
            )}
          >
            <BookOpen className="w-4 h-4" />
            Interactive View
          </button>
          <button
            onClick={() => setViewMode('pdf')}
            className={cn(
              "px-4 py-2 rounded-lg flex items-center gap-2 transition-all",
              "text-sm font-neulisSans",
              viewMode === 'pdf' 
                ? 'bg-umi-calm-blue-200 text-umi-rest-navy-500' 
                : 'hover:bg-umi-calm-blue-100 text-umi-rest-navy-400'
            )}
          >
            <FileText className="w-4 h-4" />
            PDF View
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full">
        {viewMode === 'flipbook' ? (
          <FlipBook pdfUrl={pdfUrl} previewGif={previewGif} />
        ) : (
          <PDFViewer pdfUrl={pdfUrl} />
        )}
      </div>
    </div>
  );
}; 