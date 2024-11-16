import React from 'react';
import { PdfFlipbook } from './PdfFlipbook';

export function MembershipHandbookFlipbook() {
  return (
    <PdfFlipbook 
      pdfUrl="/src/assets/pdf/umi-membership-handbook.pdf"
      title="Membership Handbook"
      pageSize="Letter"
      orientation="portrait"
      totalSpreads={23}
    />
  );
}
