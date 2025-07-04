'use client';

import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Chip } from '@heroui/react';

interface ContentCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'bordered' | 'gradient';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  }[];
  tags?: string[];
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  children,
  icon,
  variant = 'default',
  actions,
  tags,
  className = '',
}) => {
  const getCardClasses = () => {
    const baseClasses = 'w-full transition-all duration-300 hover:scale-[1.02]';
    
    switch (variant) {
      case 'highlighted':
        return `${baseClasses} bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700`;
      case 'bordered':
        return `${baseClasses} border-2 border-default-200 dark:border-default-700`;
      case 'gradient':
        return `${baseClasses} bg-gradient-to-br from-default-50 to-default-100 dark:from-default-900/50 dark:to-default-800/50`;
      default:
        return baseClasses;
    }
  };

  return (
    <Card className={`${getCardClasses()} ${className}`} shadow="sm">
      <CardHeader className="pb-0 pt-6 px-6">
        <div className="flex items-start gap-4 w-full">
          {icon && (
            <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground font-display mb-2 leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-default-500 leading-relaxed">
                {description}
              </p>
            )}
            {tags && tags.length > 0 && (
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    size="sm"
                    variant="flat"
                    color="primary"
                    className="text-xs"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      {children && (
        <CardBody className="px-6 py-4">
          <div className="text-default-600 leading-relaxed">
            {children}
          </div>
        </CardBody>
      )}

      {actions && actions.length > 0 && (
        <CardFooter className="px-6 pb-6">
          <div className="flex items-center gap-3 w-full flex-wrap">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || 'flat'}
                color={action.color || 'primary'}
                size="sm"
                onClick={action.onClick}
                className="font-medium"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}; 