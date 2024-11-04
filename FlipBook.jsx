import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card"
import { Book } from 'lucide-react';

const FlipBook = ({ pdfUrl, previewImage, previewGif, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="w-full max-w-3xl mx-auto overflow-hidden bg-white/80 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="aspect-[1.4/1] relative overflow-hidden rounded-lg">
          <img
            src={isHovered ? previewGif : previewImage}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-umi-rest/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-umi-rest px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-umi-beige transition-colors"
            >
              <Book className="w-5 h-5" />
              View PDF
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlipBook;