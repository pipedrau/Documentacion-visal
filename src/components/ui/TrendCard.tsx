'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';

interface TrendCardProps {
  title: string;
  subtitle: string;
  emoji: string;
  strengths: string[];
  weaknesses: string[];
  contexts: string[];
  whenUse: string;
  whenNotUse: string;
  examples?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  codeExample?: string;
  className?: string;
}

export const TrendCard: React.FC<TrendCardProps> = ({
  title,
  subtitle,
  emoji,
  strengths,
  weaknesses,
  contexts,
  whenUse,
  whenNotUse,
  examples,
  codeExample,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-4 w-full">
            <div className="text-4xl">{emoji}</div>
            <div>
              <h2 className="text-2xl font-bold text-foreground font-display">{title}</h2>
              <p className="text-default-600">{subtitle}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-success/20 bg-success/5">
          <CardBody>
            <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
              ✅ Fortalezas
            </h4>
            <ul className="space-y-2 text-sm">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="border-danger/20 bg-danger/5">
          <CardBody>
            <h4 className="font-semibold text-danger mb-3 flex items-center gap-2">
              ❌ Debilidades
            </h4>
            <ul className="space-y-2 text-sm">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-danger mt-1">•</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="border-warning/20 bg-warning/5">
          <CardBody>
            <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
              🎯 Contexto Ideal
            </h4>
            <ul className="space-y-2 text-sm">
              {contexts.map((context, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-warning mt-1">•</span>
                  <span>{context}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-success/20">
          <CardBody>
            <h4 className="font-semibold text-success mb-3">✅ Cuándo SÍ usarlo</h4>
            <p className="text-sm text-default-600">{whenUse}</p>
          </CardBody>
        </Card>

        <Card className="border-danger/20">
          <CardBody>
            <h4 className="font-semibold text-danger mb-3">❌ Cuándo NO usarlo</h4>
            <p className="text-sm text-default-600">{whenNotUse}</p>
          </CardBody>
        </Card>
      </div>

      {/* Examples */}
      {examples && examples.length > 0 && (
        <Card>
          <CardBody>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              🏢 Ejemplos Reales
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examples.map((example, index) => (
                <div key={index} className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
                  <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <span>{example.icon}</span>
                    {example.title}
                  </h5>
                  <p className="text-sm text-default-600">{example.description}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* Code Example */}
      {codeExample && (
        <Card>
          <CardBody className="p-0">
            <pre className="p-4 bg-default-50 dark:bg-default-900/50 overflow-x-auto">
              <code className="text-sm font-mono text-default-700 whitespace-pre">
                {codeExample}
              </code>
            </pre>
          </CardBody>
        </Card>
      )}
    </div>
  );
}; 