'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/react';

interface StatItem {
  number: string;
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <CardBody className="py-8">
            <div className={`text-4xl font-bold mb-2 text-${stat.color || 'primary'}`}>
              {stat.number}
            </div>
            <div className="text-default-600 text-sm">
              {stat.label}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}; 