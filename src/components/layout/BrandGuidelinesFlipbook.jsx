import React from 'react';
import { PdfFlipbook } from './PdfFlipbook';

export function BrandGuidelinesFlipbook() {
  return (
    <PdfFlipbook 
      pdfUrl="/src/assets/pdf/umi-brand-guidelines.pdf"
      title="Brand Guidelines"
    />
  );
}