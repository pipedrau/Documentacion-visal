'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { ContentSection, UserProgress } from '@/types/content';
import { categories } from '@/data/categories';

interface SidebarProps {
  sections: ContentSection[];
  currentSectionId: string;
  collapsed: boolean;
  onSectionSelect: (sectionId: string) => void;
  onToggle: () => void;
  userProgress: UserProgress;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  currentSectionId,
  collapsed,
  onSectionSelect,
  onToggle,
  userProgress,
}) => {
  if (collapsed) {
    return (
      <aside className="fixed left-4 top-[90px] h-[calc(100vh-120px)] w-16 bg-background/95 sidebar-floating rounded-2xl z-30">
        <div className="p-4">
          <Button
            isIconOnly
            variant="ghost"
            onClick={onToggle}
            className="w-8 h-8 hover:bg-default-100 rounded-xl"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </Button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-4 top-[90px] h-[calc(100vh-120px)] w-80 bg-background/95 sidebar-floating rounded-2xl z-30 flex flex-col overflow-hidden">
      {/* Header del Sidebar - Más espacioso */}
      <div className="px-8 py-6 border-b border-divider/50 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-display mb-1">
              Contenidos
            </h2>
            <p className="text-sm text-default-500">
              {sections.length} secciones disponibles
            </p>
          </div>
          <Button
            isIconOnly
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="hidden md:flex hover:bg-default-100 rounded-xl w-9 h-9"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Contenido Scrolleable - Mejor espaciado */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-6 sidebar-scroll">
        {categories.map((category, categoryIndex) => {
          const categorySections = sections.filter(s => s.category.id === category.id);
          
          if (categorySections.length === 0) return null;

          return (
            <div key={category.id} className={`${categoryIndex > 0 ? 'mt-8' : ''}`}>
              {/* Header de categoría mejorado */}
              <div className="mb-5 px-2">
                <h3 className="text-xs font-bold text-default-600 uppercase tracking-wider letter-spacing-wide mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-default-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Lista de secciones con mejor espaciado */}
              <div className="space-y-1">
                {categorySections.map((section) => {
                  const isActive = section.id === currentSectionId;
                  const isCompleted = userProgress.completedSections.includes(section.id);

                  return (
                    <button
                      key={section.id}
                      onClick={() => onSectionSelect(section.id)}
                      className={`
                        w-full text-left p-3 rounded-xl transition-all duration-200 group relative
                        ${isActive 
                          ? 'bg-success/20 border border-success/40 shadow-lg ring-1 ring-success/20' 
                          : 'hover:bg-default-50 border border-transparent hover:border-default-200'
                        }
                      `}
                    >
                      {/* Barra lateral izquierda para sección activa */}
                      {isActive && (
                        <div className="absolute left-0 top-1 bottom-1 w-1 bg-success rounded-r-full"></div>
                      )}
                      
                      <div className="flex items-center gap-3">
                        {/* Indicador de estado */}
                        <div className="flex-shrink-0">
                          {isCompleted ? (
                            <div className="w-2 h-2 bg-success rounded-full shadow-sm ring-2 ring-success/20" />
                          ) : isActive ? (
                            <div className="w-2 h-2 bg-success rounded-full shadow-sm ring-2 ring-success/30" />
                          ) : (
                            <div className="w-2 h-2 bg-default-400 rounded-full" />
                          )}
                        </div>
                        
                        {/* Contenido de la sección */}
                        <div className="flex-1 min-w-0">
                          <div className={`
                            text-xs font-medium leading-tight transition-colors
                            ${isActive 
                              ? 'text-success-800 font-bold' 
                              : 'text-default-700 group-hover:text-default-900'
                            }
                          `}
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: '1.3'
                          }}
                          >
                            {section.title}
                          </div>
                        </div>
                        
                        {/* Indicador activo mejorado */}
                        {isActive && (
                          <div className="flex-shrink-0">
                            <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-sm">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Separador entre categorías */}
              {categoryIndex < categories.length - 1 && (
                <div className="mt-8 px-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-divider to-transparent"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer del Sidebar - Mejor diseño */}
      <div className="px-6 py-4 border-t border-divider/50 flex-shrink-0">
        <div className="flex items-center justify-center gap-2 text-xs text-default-500">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span>{userProgress.completedSections.length} de {sections.length} completadas</span>
        </div>
      </div>
    </aside>
  );
}; 