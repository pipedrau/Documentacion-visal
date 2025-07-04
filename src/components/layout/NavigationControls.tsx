'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { ContentSection } from '@/types/content';

interface NavigationControlsProps {
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  currentSection: ContentSection;
  sections: ContentSection[];
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
  currentSection,
  sections,
}) => {
  const currentIndex = sections.findIndex(s => s.id === currentSection.id);
  const progressPercentage = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center justify-between bg-background/95 backdrop-blur-md border border-divider rounded-full px-8 py-4 shadow-xl min-w-[420px]">
        {/* Botón Atrás */}
        <Button
          variant="bordered"
          color="default"
          size="md"
          isDisabled={!canGoPrev}
          onClick={onPrev}
          className="rounded-full px-6 py-2 min-w-[80px] font-medium border-default-400 text-default-700 hover:border-default-500 hover:text-default-800 transition-all"
        >
          Atrás
        </Button>

        {/* Barra de Progreso Central - CSS Puro */}
        <div className="flex items-center px-6">
          <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Botón Siguiente */}
        <Button
          variant="solid"
          color="success"
          size="md"
          isDisabled={!canGoNext}
          onClick={onNext}
          className="rounded-full px-6 py-2 min-w-[80px] font-medium bg-success text-white hover:bg-success-600 transition-all"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}; 