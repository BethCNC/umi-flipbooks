import React from 'react';
import { ResourceViewer } from '@/components/ui/FlipBook';

// Import assets with correct paths using kebab-case
import brandGuidelinesCover from '@/assets/images/umi-wellness-brand-guidelines-cover-image.png';
import membershipHandbookCover from '@/assets/images/membership-handbook-cover-image.png';
import brandImage from '@/assets/images/brand-images/umi-imagesartboard-11.png';

// Import PDFs with correct kebab-case file names
import brandGuidelinesPdf from '@/assets/pdf/umi-wellness-brand-guidelines.pdf';
import membershipHandbookPdf from '@/assets/pdf/umi-wellness-membership-handbook-by-beth.pdf';

const App = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <img 
            src={brandImage}
            alt="UMI Wellness Center"
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg object-cover"
          />
          <h1 className="text-4xl font-neulisCursive text-umi-rest-navy-500 mb-3">
            Brand Resources
          </h1>
          <p className="text-umi-rest-navy-400 max-w-2xl mx-auto">
            Explore UMI Wellness Center's brand identity through our interactive guides and visual elements.
          </p>
        </header>

        {/* Brand Guidelines Flipbook */}
        <ResourceViewer
          title="Brand Guidelines"
          description="Comprehensive guide to UMI's visual identity, brand voice, and design elements."
          pdfUrl={brandGuidelinesPdf}
          coverImage={brandGuidelinesCover}
        />

        {/* Membership Handbook Flipbook */}
        <ResourceViewer
          title="Membership Handbook"
          description="Essential information and guidelines for UMI Wellness Center members."
          pdfUrl={membershipHandbookPdf}
          coverImage={membershipHandbookCover}
        />

        {/* Brand Mockups Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-neulisCursive text-umi-rest-navy-500 mb-8 text-center">
            Brand Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={brandImage} 
                alt="UMI Brand Example"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-umi-calm-blue-50">
                <h3 className="text-lg font-neulisSans text-umi-rest-navy-500">
                  Brand Design
                </h3>
                <p className="text-sm text-umi-rest-navy-400">
                  Example of UMI's brand identity
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;