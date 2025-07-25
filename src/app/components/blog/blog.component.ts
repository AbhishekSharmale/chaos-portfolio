import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  status: 'published' | 'draft' | 'deprecated';
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'I Built a Kubernetes Cluster to Host My Grocery List',
      date: '2024-01-15',
      excerpt: 'Why use a simple notepad when you can orchestrate containers? A deep dive into overengineering basic tasks with enterprise-grade solutions.',
      readTime: '5 min',
      tags: ['kubernetes', 'overengineering', 'regret'],
      status: 'published'
    },
    {
      title: 'Monitoring My Coffee Machine with Prometheus (It\'s Complicated)',
      date: '2024-01-10',
      excerpt: 'Real-time metrics, alerting, and a Grafana dashboard for coffee consumption. Because data-driven caffeine intake is the future.',
      readTime: '8 min',
      tags: ['prometheus', 'grafana', 'coffee', 'metrics'],
      status: 'published'
    },
    {
      title: 'Why I Use Terraform to Manage My Dating Life',
      date: '2024-01-05',
      excerpt: 'Infrastructure as Code for relationships. Includes modules for date planning, conflict resolution, and automated apology deployment.',
      readTime: '12 min',
      tags: ['terraform', 'relationships', 'automation', 'single'],
      status: 'deprecated'
    },
    {
      title: 'Docker Compose for My Morning Routine',
      date: '2024-01-01',
      excerpt: 'Containerizing daily habits with proper orchestration, health checks, and rollback strategies for when I oversleep.',
      readTime: '6 min',
      tags: ['docker', 'productivity', 'morning', 'containers'],
      status: 'published'
    },
    {
      title: 'CI/CD Pipeline for My Laundry',
      date: '2023-12-28',
      excerpt: 'Automated testing, staging environments, and deployment strategies for clean clothes. Still working on the rollback mechanism.',
      readTime: '7 min',
      tags: ['cicd', 'automation', 'laundry', 'jenkins'],
      status: 'draft'
    },
    {
      title: 'Load Balancing My Social Life with NGINX',
      date: '2023-12-20',
      excerpt: 'Distributing social interactions across multiple friend groups with proper health checks and failover mechanisms.',
      readTime: '4 min',
      tags: ['nginx', 'load-balancing', 'social', 'networking'],
      status: 'published'
    }
  ];

  getStatusColor(status: string): string {
    const colors = {
      'published': '#28a745',
      'draft': '#ffc107',
      'deprecated': '#dc3545'
    };
    return colors[status as keyof typeof colors] || '#6c757d';
  }

  getStatusIcon(status: string): string {
    const icons = {
      'published': '✅',
      'draft': '📝',
      'deprecated': '⚠️'
    };
    return icons[status as keyof typeof icons] || '📄';
  }

  trackByTitle(index: number, post: BlogPost): string {
    return post.title;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}