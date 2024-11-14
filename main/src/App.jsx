import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import BrandMockups from './components/sections/BrandMockups';
import { ResourceViewer } from './components/ui/FlipBook';
import BrandImageGallery from './components/sections/BrandImageGallery';
import ContentSection from './components/sections/ContentSection';
import Footer from './components/layout/Footer';

// Update image paths to match exact case and structure
import brandGuidelinesCover from './assets/images/umi-wellness-brand-guidelines-cover-image.png';
import membershipHandbookCover from './assets/images/membership-handbook-cover-image.png';
import brandImage from './assets/images/brand-images/umi-images-artboard-11.png';

// Update PDF paths
import brandGuidelinesPdf from './assets/pdf/umi-wellness-brand-guidelines.pdf';
import membershipHandbookPdf from './assets/pdf/umi-wellness-membership-handbook-by-beth.pdf';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BrandMockups />
        <ResourceViewer
          title="Brand Guidelines"
          description="Comprehensive guide to UMI's visual identity"
          pdfUrl={brandGuidelinesPdf}
          coverImage={brandGuidelinesCover}
        />
        <BrandImageGallery />
        <ResourceViewer
          title="Membership Handbook"
          description="Essential information for members"
          pdfUrl={membershipHandbookPdf}
          coverImage={membershipHandbookCover}
        />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;