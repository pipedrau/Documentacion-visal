'use client';

import React from 'react';
import { Chip } from '@heroui/react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  category?: {
    title: string;
    icon?: string;
    color?: string;
  };
  tags?: string[];
  estimatedReadTime?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  category,
  tags,
}) => {
  return (
    <header className="text-center mb-12">
      {category && (
        <div className="flex items-center justify-center gap-2 mb-4">
          {category.icon && <span className="text-2xl">{category.icon}</span>}
          <Chip
            size="md"
            variant="flat"
            color={(category.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger') || 'primary'}
            className="font-medium"
          >
            {category.title}
          </Chip>
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-6 leading-tight">
        {title}
      </h1>

      {description && (
        <p className="text-xl text-default-500 max-w-3xl mx-auto leading-relaxed mb-6">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              size="sm"
              variant="bordered"
              color="default"
              className="text-xs"
            >
              {tag}
            </Chip>
          ))}
        </div>
      )}
    </header>
  );
}; 