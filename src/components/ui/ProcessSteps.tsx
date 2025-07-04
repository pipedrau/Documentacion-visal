'use client';

import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  className?: string;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps, className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
            {step.number}
          </div>
          <div className="flex-1 pt-1">
            <h4 className="text-lg font-semibold text-foreground mb-2 font-display">
              {step.title}
            </h4>
            <div className="text-default-600 leading-relaxed">
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 