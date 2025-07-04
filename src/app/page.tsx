'use client';

import React, { useState, useEffect } from 'react';
import { DocumentationLayout } from '@/components/layout/DocumentationLayout';
import { sections, getSectionById } from '@/data/sections';
import { UserProgress } from '@/types/content';

export default function Home() {
  const [currentSectionId, setCurrentSectionId] = useState('introduction');
  const [userProgress, setUserProgress] = useState<UserProgress>({
    currentSectionId: 'introduction',
    completedSections: [],
    totalSections: sections.length,
    progressPercentage: 0,
    timeSpent: 0,
    lastVisited: new Date(),
  });

  const currentSection = getSectionById(currentSectionId) || sections[0];

  // Simular progreso del usuario
  useEffect(() => {
    const currentIndex = sections.findIndex(s => s.id === currentSectionId);
    const progressPercentage = Math.round(((currentIndex + 1) / sections.length) * 100);
    
    setUserProgress(prev => ({
      ...prev,
      currentSectionId,
      progressPercentage,
      lastVisited: new Date(),
    }));
  }, [currentSectionId]);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      
      const currentIndex = sections.findIndex(s => s.id === currentSectionId);
      
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          if (currentIndex > 0) {
            setCurrentSectionId(sections[currentIndex - 1].id);
          }
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          if (currentIndex < sections.length - 1) {
            setCurrentSectionId(sections[currentIndex + 1].id);
          }
          break;
        case 'Home':
          setCurrentSectionId(sections[0].id);
          break;
        case 'End':
          setCurrentSectionId(sections[sections.length - 1].id);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSectionId]);

  const handleSectionChange = (sectionId: string) => {
    setCurrentSectionId(sectionId);
    
    // Marcar sección anterior como completada
    const currentIndex = sections.findIndex(s => s.id === currentSectionId);
    if (currentIndex >= 0 && !userProgress.completedSections.includes(currentSectionId)) {
      setUserProgress(prev => ({
        ...prev,
        completedSections: [...prev.completedSections, currentSectionId],
      }));
    }
  };

  return (
    <DocumentationLayout
      currentSection={currentSection}
      sections={sections}
      userProgress={userProgress}
      onSectionChange={handleSectionChange}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {currentSection.content}
      </div>
    </DocumentationLayout>
  );
}
