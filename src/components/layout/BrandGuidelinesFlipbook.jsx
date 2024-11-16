import React from 'react';
import { PdfFlipbook } from './PdfFlipbook';
import brandGuidelinesPdf from '../../assets/pdf/umi-brand-guidelines.pdf';

export function BrandGuidelinesFlipbook() {
  console.log('Brand Guidelines PDF path:', brandGuidelinesPdf);
  return (
    <PdfFlipbook 
      pdfUrl={brandGuidelinesPdf}
      title="Brand Guidelines"
      pageSize="A4"
      orientation="landscape"
      totalSpreads={18}
    />
  );
}