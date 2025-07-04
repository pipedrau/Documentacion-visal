'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand } from '@heroui/react';
import { Sidebar } from './Sidebar';
import { NavigationControls } from './NavigationControls';
import { ContentSection, UserProgress } from '@/types/content';

interface DocumentationLayoutProps {
  children: React.ReactNode;
  currentSection: ContentSection;
  sections: ContentSection[];
  userProgress: UserProgress;
  onSectionChange: (sectionId: string) => void;
}

export const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  children,
  currentSection,
  sections,
  userProgress,
  onSectionChange,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentIndex = sections.findIndex(s => s.id === currentSection.id);
  const canGoNext = currentIndex < sections.length - 1;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) {
      onSectionChange(sections[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      onSectionChange(sections[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navbar 
        isBordered
        className="fixed top-0 z-50 border-b border-divider bg-background/80 backdrop-blur-md"
        maxWidth="full"
        height="70px"
      >
        <NavbarBrand className="py-3">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="mr-4 p-2 rounded-lg hover:bg-default-100 md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-foreground font-display">
                Documentación de <span className="text-primary">Consistencia Visual</span>
              </h1>
              <span className="text-sm font-normal text-default-500">
                • Una guía completa para equipos de diseño y desarrollo
              </span>
            </div>
          </div>
        </NavbarBrand>
      </Navbar>

      <div className="flex pt-[70px]">
        {/* Sidebar */}
        <Sidebar
          sections={sections}
          currentSectionId={currentSection.id}
          collapsed={sidebarCollapsed}
          onSectionSelect={onSectionChange}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          userProgress={userProgress}
        />

        {/* Main Content - Ajustado para sidebar flotante */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? 'ml-0' : 'ml-[340px]'
          } ${isMobile ? 'ml-0' : ''}`}
        >
          <div className="min-h-[calc(100vh-70px)] pb-24">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="animate-fade-in-up">
                {children}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <NavigationControls
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            onPrev={handlePrev}
            onNext={handleNext}
            currentSection={currentSection}
            sections={sections}
          />
        </main>
      </div>
    </div>
  );
}; 