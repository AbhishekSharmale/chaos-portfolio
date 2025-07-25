import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  systemRequirements = [
    'Coffee >= 5.0.0 (required)',
    'Sleep < 6.0.0 (optional)',
    'Sanity ^0.1.0 (deprecated)',
    'Patience ~0.0.1 (not found)'
  ];

  knownBugs = [
    'Overengineers simple solutions',
    'Cannot resist adding "just one more feature"',
    'Explains jokes in technical terms',
    'Uses Kubernetes for everything'
  ];

  features = [
    'DevOps Engineering',
    'Infrastructure as Code',
    'Container Orchestration',
    'CI/CD Pipeline Design',
    'Cloud Architecture',
    'Monitoring & Observability',
    'Automation Scripting',
    'Problem Overcomplication'
  ];

  contributionGuidelines = [
    'Fork this human',
    'Create a feature branch (git checkout -b feature/new-skill)',
    'Commit your changes (git commit -m "Add coffee dependency")',
    'Push to the branch (git push origin feature/new-skill)',
    'Open a Pull Request (results may vary)'
  ];

  getPackageJson(): string {
    return `{
  "dependencies": {${this.systemRequirements.map(req => `\n    "${req}"`).join(',')}
  },
  "scripts": {
    "start": "coffee --watch --compile .",
    "debug": "console.log(\"why did I do this?\")",
    "deploy": "kubectl apply -f everything.yaml"
  }
}`;
  }
}