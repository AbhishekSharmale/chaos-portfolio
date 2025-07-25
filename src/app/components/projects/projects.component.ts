import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  style: 'terminal' | 'github' | 'docker' | 'json';
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Terraform modules for deploying scalable applications across AWS, Azure, and GCP with automated CI/CD pipelines.',
      tech: ['Terraform', 'AWS', 'Azure', 'GCP', 'GitHub Actions'],
      status: 'PRODUCTION',
      style: 'terminal',
      link: 'https://github.com/abhishek/multi-cloud-terraform'
    },
    {
      title: 'Kubernetes Security Scanner',
      description: 'Automated security scanning tool for K8s clusters with policy enforcement and compliance reporting.',
      tech: ['Go', 'Kubernetes', 'Docker', 'Helm', 'OPA'],
      status: 'ACTIVE',
      style: 'github',
      link: 'https://github.com/abhishek/k8s-security-scanner'
    },
    {
      title: 'Coffee Machine Monitoring with Prometheus',
      description: 'Real-time metrics, alerting when coffee is low, and a Grafana dashboard because data is beautiful.',
      tech: ['Prometheus', 'Grafana', 'Arduino', 'Go'],
      status: 'CAFFEINATED',
      style: 'docker',
      link: 'https://github.com/abhishek/coffee-metrics'
    },
    {
      title: 'GitOps Deployment Pipeline',
      description: 'Complete GitOps workflow with ArgoCD, automated testing, and progressive delivery strategies.',
      tech: ['ArgoCD', 'Kubernetes', 'Helm', 'Tekton', 'Istio'],
      status: 'DEPLOYED',
      style: 'json',
      link: 'https://github.com/abhishek/gitops-pipeline'
    },
    {
      title: 'Terraform for Dating Life Management',
      description: 'Infrastructure as Code for relationships. Includes modules for date planning and conflict resolution.',
      tech: ['Terraform', 'AWS', 'Python', 'Regret'],
      status: 'SINGLE',
      style: 'terminal',
      link: 'https://github.com/abhishek/terraform-dating'
    },
    {
      title: 'Observability Stack Automation',
      description: 'One-click deployment of complete observability stack with Prometheus, Grafana, Jaeger, and custom dashboards.',
      tech: ['Prometheus', 'Grafana', 'Jaeger', 'Kubernetes', 'Helm'],
      status: 'MONITORING',
      style: 'github',
      link: 'https://github.com/abhishek/observability-stack'
    }
  ];

  ngOnInit() {
    this.shuffleProjectStyles();
  }

  private shuffleProjectStyles() {
    const styles: Project['style'][] = ['terminal', 'github', 'docker', 'json'];
    this.projects.forEach((project, index) => {
      project.style = styles[index % styles.length];
    });
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'PRODUCTION': '#28a745',
      'ACTIVE': '#00ff41',
      'DEPLOYED': '#17a2b8',
      'MONITORING': '#6f42c1',
      'CAFFEINATED': '#ffa726',
      'SINGLE': '#ff6b6b'
    };
    return colors[status] || '#7d8590';
  }

  getSlugifiedTitle(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  getJsonString(project: Project): string {
    return `{
  "title": "${project.title}",
  "description": "${project.description}",
  "technologies": [${project.tech.map(t => `"${t}"`).join(', ')}],
  "status": "${project.status}",
  "maintainer": "abhishek",
  "last_updated": "2024-01-15T10:30:45.123Z"
}`;
  }

  getProjectId(title: string): string {
    const idMap: { [key: string]: string } = {
      'Multi-Cloud Infrastructure Automation': 'multi-cloud-infrastructure-automation',
      'Kubernetes Security Scanner': 'kubernetes-security-scanner', 
      'Coffee Machine Monitoring with Prometheus': 'rice-cooker-monitoring',
      'GitOps Deployment Pipeline': 'kubernetes-dating-app',
      'Terraform for Dating Life Management': 'kubernetes-dating-app',
      'Observability Stack Automation': 'ai-coffee-optimizer'
    };
    return idMap[title] || this.getSlugifiedTitle(title);
  }
}