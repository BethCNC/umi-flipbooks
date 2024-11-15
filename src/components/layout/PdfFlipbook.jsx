import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { PdfPage } from '../ui/PdfPage';
import { FlipbookPagination } from '../ui/FlipbookPagination';
import { FlipbookContainer } from './FlipbookContainer';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export function PdfFlipbook({ pdfUrl, title }) {
  const bookRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        setTotalPages(pdf.numPages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  if (isLoading) {
    return (
      <FlipbookContainer>
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
        </div>
      </FlipbookContainer>
    );
  }

  return (
    <FlipbookContainer>
      <HTMLFlipBook
        ref={bookRef}
        width={800}
        height={1131}
        size="stretch"
        minWidth={400}
        maxWidth={1000}
        minHeight={565}
        maxHeight={1414}
        drawShadow={true}
        flippingTime={1000}
        className="mx-auto"
        showCover={true}
        onFlip={(e) => setCurrentPage(e.data)}
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <div key={i} className="page">
            <PdfPage 
              pageNumber={i + 1}
              pdfUrl={pdfUrl}
              width={800}
              height={1131}
            />
          </div>
        ))}
      </HTMLFlipBook>
      
      <FlipbookPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={() => bookRef.current?.pageFlip()?.flipPrev()}
        onNextPage={() => bookRef.current?.pageFlip()?.flipNext()}
        onDownload={() => window.open(pdfUrl, '_blank')}
        onCopyLink={() => navigator.clipboard.writeText(window.location.href)}
        onToggleSound={() => {}} // We can implement sound later
        isSoundOn={false}
      />
    </FlipbookContainer>
  );
}