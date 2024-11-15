import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Download, Maximize2 } from 'lucide-react';
import { cn } from "@/lib/utils";

// Page Components
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref} data-density="hard">
      <img 
        src={props.coverImage} 
        alt={props.title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
});

const ResourceViewer = ({ title, description, pdfUrl, coverImage, previewGif }) => {
  const [viewMode, setViewMode] = useState('flipbook');
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

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

      {/* Viewer Container */}
      {/* ... rest of the component implementation ... */}
    </div>
  );
};

export default ResourceViewer;