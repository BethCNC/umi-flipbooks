import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Ensure we're using the latest PDF.js worker
const workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export function PdfPage({ pageNumber, pdfUrl, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    async function renderPage() {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        if (!mounted) return;
        
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.0 });
        
        // Calculate scale to fit the container
        const scale = Math.min(width / viewport.width, height / viewport.height);
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render PDF page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
          enableWebGL: true
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error rendering page:', error);
      }
    }

    if (canvas && context) {
      renderPage();
    }

    return () => {
      mounted = false;
    };
  }, [pageNumber, pdfUrl, width, height]);

  return (
    <div className="pdf-page" style={{ width, height }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          backgroundColor: '#fff'
        }}
      />
    </div>
  );
}
