import { ContentCategory } from '@/types/content';

export const categories: ContentCategory[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentos de Consistencia',
    description: 'Principios básicos y conceptos fundamentales',
    order: 1,
    icon: '🎯',
    color: 'primary'
  },
  {
    id: 'trends',
    title: 'Tendencias de Diseño UI',
    description: 'Análisis de tendencias actuales y su aplicación',
    order: 2,
    icon: '📈',
    color: 'secondary'
  },
  {
    id: 'application',
    title: 'Aplicación Práctica',
    description: 'Frameworks y casos de uso reales',
    order: 3,
    icon: '🛠️',
    color: 'success'
  }
];

export const getCategoryById = (id: string): ContentCategory | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoriesByOrder = (): ContentCategory[] => {
  return categories.sort((a, b) => a.order - b.order);
}; 