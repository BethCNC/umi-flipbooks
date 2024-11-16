import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { PdfPage } from '../ui/PdfPage';
import { FlipbookPagination } from '../ui/FlipbookPagination';
import { FlipbookContainer } from './FlipbookContainer';
import * as pdfjsLib from 'pdfjs-dist';
import Lottie from 'lottie-react';
import forwardsAnimation from '../../assets/images/forwards.json';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export function PdfFlipbook({ pdfUrl, title }) {
  const bookRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Figma specs
  const containerWidth = 1280; // px
  const containerPadding = 80; // px
  const gutterSpacing = 24; // px

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        setTotalPages(pdf.numPages);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  if (error) {
    return (
      <FlipbookContainer>
        <div className="flex flex-col items-center justify-center min-h-[600px] text-red-500">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-umi-peace-green-500 text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      </FlipbookContainer>
    );
  }

  if (isLoading) {
    return (
      <FlipbookContainer>
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-umi-peace-green-500" />
        </div>
      </FlipbookContainer>
    );
  }

  return (
    <FlipbookContainer>
      <div className="relative">
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
          forwardsAnimation={forwardsAnimation}
        />
      </div>
    </FlipbookContainer>
  );
}