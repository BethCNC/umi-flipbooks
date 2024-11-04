import React, { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';

// Import assets - use relative paths from src directory
import brandGuidelinesCover from '/src/assets/images/Umi Wellness Brand Guidelines Cover Image.png';
import membershipHandbookCover from '/src/assets/images/Membership Handbook Cover Image.png';

// Test component to verify assets are loading
const App = () => {
  // Add console.log to check if imports are working
  console.log('Testing image paths:', { brandGuidelinesCover, membershipHandbookCover });

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <img 
            src={brandGuidelinesCover}
            alt="UMI Wellness Center"
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-3xl mb-3">Brand Resources</h1>
        </header>

        {/* Brand Guidelines Card */}
        <div className="mb-8 p-6 bg-[#f0f9f9] rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl mb-2">Brand Guidelines</h2>
              <p className="text-gray-600">
                Comprehensive guide to UMI's visual identity, brand voice, and design elements.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c2dcdf] rounded-md">
                <BookOpen className="w-4 h-4" />
                Interactive View
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#e7f1f2] rounded-md">
                <FileText className="w-4 h-4" />
                PDF View
              </button>
            </div>
          </div>
        </div>

        {/* Membership Handbook Card */}
        <div className="p-6 bg-[#f0f9f9] rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl mb-2">Membership Handbook</h2>
              <p className="text-gray-600">
                Essential information and guidelines for UMI Wellness Center members.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c2dcdf] rounded-md">
                <BookOpen className="w-4 h-4" />
                Interactive View
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#e7f1f2] rounded-md">
                <FileText className="w-4 h-4" />
                PDF View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;