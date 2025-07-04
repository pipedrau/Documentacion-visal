'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  title, 
  className = '' 
}) => {
  return (
    <Card className={`w-full ${className}`}>
      {title && (
        <div className="px-4 py-2 bg-default-100 border-b border-default-200">
          <span className="text-sm font-medium text-default-700">{title}</span>
        </div>
      )}
      <CardBody className="p-0">
        <pre className="p-4 bg-default-50 dark:bg-default-900/50 overflow-x-auto">
          <code className="text-sm font-mono text-default-700 whitespace-pre">
            {code}
          </code>
        </pre>
      </CardBody>
    </Card>
  );
}; 