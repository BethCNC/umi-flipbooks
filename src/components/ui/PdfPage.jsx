import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export function PdfPage({ pageNumber, pdfUrl, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPage = async () => {
      try {
        // Load the PDF document
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(pageNumber);

        // Get the canvas context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Calculate scale to fit the container while maintaining aspect ratio
        const viewport = page.getViewport({ scale: 1.0 });
        const scale = Math.min(width / viewport.width, height / viewport.height);
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the PDF page
        await page.render({
          canvasContext: context,
          viewport: scaledViewport
        }).promise;

      } catch (error) {
        console.error('Error rendering PDF page:', error);
      }
    };

    renderPage();
  }, [pageNumber, pdfUrl, width, height]);

  return (
    <div className="pdf-page" style={{ width, height }}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
