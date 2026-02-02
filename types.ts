export interface Lab {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  block: number;
  tags: string[];
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  topics: string[];
  labs: string[]; // Lab IDs
}

export interface Block {
  id: number;
  title: string;
  description: string;
  duration: string;
  modules: Module[];
}

export interface Tool {
  name: string;
  category: string;
  complexity: number; // 1-10
  description: string;
}

export interface CertificationNode {
  name: string;
  provider: string;
  readinessBlock: number; // After which block are you ready?
  color: string;
}
