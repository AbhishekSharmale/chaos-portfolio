export interface ChaosProject {
  id: string;
  title: string;
  category: 'household' | 'ai' | 'infrastructure' | 'fun';
  status: 'deployed' | 'abandoned' | 'regretted' | 'still-running';
  story: {
    problem: string;
    motivation: string;
    solution: string;
    complications?: string;
    aftermath: string;
  };
  tech: string[];
  metrics: {
    linesOfCode: number;
    timeInvested: string;
    actualUsefulness: number;
    regretLevel: number;
  };
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}