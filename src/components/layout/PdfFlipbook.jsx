import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { PdfPage } from '../ui/PdfPage';
import { FlipbookPagination } from '../ui/FlipbookPagination';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export function PdfFlipbook({ pdfUrl, title, pageSize = 'A4', orientation = 'landscape', totalSpreads }) {
  const containerRef = useRef(null);
  const bookRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        console.log('Attempting to load PDF:', pdfUrl);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        console.log('PDF loaded successfully, pages:', pdf.numPages);
        setTotalPages(pdf.numPages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (!containerRef.current) return;

    const calculateDimensions = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = window.innerHeight * 0.8;

      let pageWidthInInches, pageHeightInInches;

      // Set page dimensions based on the page size and orientation
      if (pageSize === 'A4') {
        pageWidthInInches = orientation === 'landscape' ? 11.69 : 8.27;
        pageHeightInInches = orientation === 'landscape' ? 8.27 : 11.69;
      } else if (pageSize === 'Letter') {
        pageWidthInInches = orientation === 'landscape' ? 11 : 8.5;
        pageHeightInInches = orientation === 'landscape' ? 8.5 : 11;
      } else {
        // Default to A4 if unknown size
        pageWidthInInches = orientation === 'landscape' ? 11.69 : 8.27;
        pageHeightInInches = orientation === 'landscape' ? 8.27 : 11.69;
      }

      // Calculate the ratio for a single page
      const singlePageRatio = pageWidthInInches / pageHeightInInches;
      // Calculate the ratio for a spread (two pages side by side)
      const spreadRatio = (pageWidthInInches * 2) / pageHeightInInches;

      let width, height;

      if (containerWidth / containerHeight > spreadRatio) {
        // Fit based on height
        height = containerHeight * 0.9;
        width = height * spreadRatio;
      } else {
        // Fit based on width
        width = containerWidth * 0.9;
        height = width / spreadRatio;
      }

      console.log('Setting dimensions:', { width, height });
      setDimensions({ width, height });
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, [containerRef, pageSize, orientation]);

  if (error) {
    return (
      <div className="w-full min-h-[600px] bg-[#1e293b] p-8 rounded-xl flex items-center justify-center">
        <div className="text-white">Error loading PDF: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1e293b] p-8 rounded-xl">
      <div ref={containerRef} className="relative w-full min-h-[600px] flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="text-white">Loading PDF...</div>
        ) : (
          dimensions.width > 0 && totalPages > 0 && (
            <>
              <HTMLFlipBook
                ref={bookRef}
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={300}
                maxWidth={dimensions.width}
                minHeight={400}
                maxHeight={dimensions.height}
                drawShadow={true}
                flippingTime={1000}
                className="mx-auto"
                showCover={true}
                startPage={0}
                onFlip={(e) => setCurrentPage(e.data)}
                useMouseEvents={false}
              >
                {/* First Page (Cover) */}
                <div className="page">
                  <PdfPage
                    pageNumber={1}
                    pdfUrl={pdfUrl}
                    width={dimensions.width}
                    height={dimensions.height}
                  />
                </div>
                {/* Subsequent Spreads */}
                {Array.from({ length: Math.ceil((totalPages - 1) / 2) }, (_, i) => {
                  const leftPageNumber = 2 + i * 2;
                  const rightPageNumber = leftPageNumber + 1;

                  return (
                    <React.Fragment key={i}>
                      <div className="page">
                        {leftPageNumber <= totalPages && (
                          <PdfPage
                            pageNumber={leftPageNumber}
                            pdfUrl={pdfUrl}
                            width={dimensions.width / 2}
                            height={dimensions.height}
                          />
                        )}
                      </div>
                      <div className="page">
                        {rightPageNumber <= totalPages && (
                          <PdfPage
                            pageNumber={rightPageNumber}
                            pdfUrl={pdfUrl}
                            width={dimensions.width / 2}
                            height={dimensions.height}
                          />
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </HTMLFlipBook>
              <FlipbookPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevPage={() => bookRef.current?.pageFlip().flipPrev()}
                onNextPage={() => bookRef.current?.pageFlip().flipNext()}
                onDownload={() => window.open(pdfUrl, '_blank')}
                onCopyLink={() => navigator.clipboard.writeText(window.location.href)}
                className="mt-8"
              />
            </>
          )
        )}
      </div>
    </div>
  );
}