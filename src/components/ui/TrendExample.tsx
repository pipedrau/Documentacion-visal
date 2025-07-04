'use client';

import React, { useState } from 'react';
import { Card, CardBody, Button } from '@heroui/react';

interface TrendExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  language?: string;
}

export const TrendExample: React.FC<TrendExampleProps> = ({
  title,
  description,
  children,
  code,
  language = 'css'
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <Card className="w-full">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-foreground">{title}</h4>
            <p className="text-sm text-default-600 mt-1">{description}</p>
          </div>
          <Button
            variant={showCode ? "solid" : "bordered"}
            color="primary"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="ml-4"
          >
            {showCode ? 'Ver Ejemplo' : 'Ver Código'}
          </Button>
        </div>

        <div className="min-h-[200px] border border-divider rounded-lg overflow-hidden">
          {showCode ? (
            <div className="bg-default-900 text-default-100 p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-default-400">
                  {language}
                </span>
                <Button
                  size="sm"
                  variant="light"
                  onClick={() => navigator.clipboard.writeText(code)}
                  className="text-default-400 hover:text-default-100"
                >
                  Copiar
                </Button>
              </div>
              <pre className="text-sm font-mono overflow-auto">
                <code>{code}</code>
              </pre>
            </div>
          ) : (
            <div className="p-6 bg-default-50 dark:bg-default-900/20 h-full flex items-center justify-center">
              {children}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}; 