export interface ContentSection {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode | string;
  category: ContentCategory;
  order: number;
  tags?: string[];
  estimatedReadTime?: number;
  lastUpdated?: Date;
}

export interface ContentCategory {
  id: string;
  title: string;
  description?: string;
  order: number;
  icon?: string;
  color?: string;
}

export interface TrendExample {
  id: string;
  title: string;
  description: string;
  category: 'neuomorphism' | 'glassmorphism' | 'material-design' | 'dark-mode' | 'brutalism' | 'claymorphism';
  imageUrl?: string;
  codeExample?: string;
  pros: string[];
  cons: string[];
  useCases: string[];
  companies?: string[];
}

export interface NavigationItem {
  id: string;
  title: string;
  href?: string;
  sectionId?: string;
  icon?: string;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface UserProgress {
  currentSectionId: string;
  completedSections: string[];
  totalSections: number;
  progressPercentage: number;
  timeSpent: number;
  lastVisited: Date;
}

export interface ModalState {
  isOpen: boolean;
  type: 'trend-example' | 'framework-detail' | 'case-study' | null;
  data: TrendExample | ContentSection | null;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppSettings {
  theme: ThemeMode;
  sidebarCollapsed: boolean;
  autoPlayExamples: boolean;
  showProgressBar: boolean;
  keyboardNavigation: boolean;
} 