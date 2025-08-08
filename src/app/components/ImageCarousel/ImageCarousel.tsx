'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  onImageClick: (imageUrl: string, index: number) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageLoadError(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoadError(false);
  };

  const handleImageClick = () => {
    onImageClick(images[currentIndex], currentIndex);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setImageLoadError(false);
  };

  return (
    <div className="relative w-full mt-4 mb-4">
      {/* Fixed height container for consistent arrow positioning */}
      <div className="relative group h-96 flex items-center justify-center">
        <div 
          className="cursor-pointer"
          onClick={handleImageClick}
        >
          {!imageLoadError ? (
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="max-w-full max-h-96 h-auto rounded-lg object-contain"
              onError={() => {
                console.error('Image failed to load:', images[currentIndex]);
                setImageLoadError(true);
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', images[currentIndex]);
                setImageLoadError(false);
              }}
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-300 text-gray-600 rounded-lg">
              <div className="text-center">
                <div className="text-sm font-medium">Image Preview</div>
                <div className="text-xs mt-1">Click to view full size</div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation arrows - positioned relative to fixed height container */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Image indicators - only show if more than one image */}
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-400 w-6' 
                  : 'bg-blue-200 hover:bg-blue-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
