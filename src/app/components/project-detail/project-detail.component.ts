import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaosProject } from '../../models/chaos-project.model';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: ChaosProject | null = null;
  
  projects: ChaosProject[] = [
    {
      id: 'rice-cooker-monitoring',
      title: 'Rice Cooker Prometheus Exporter',
      category: 'household',
      status: 'regretted',
      story: {
        problem: 'My rice cooker didn\'t have enough monitoring. How was I supposed to know if my rice was achieving optimal fluffiness without Grafana dashboards?',
        motivation: 'What if... what if I could get Slack alerts when my rice is ready? What if I could track rice-cooking trends over time? What if this is the most important infrastructure project of my career?',
        solution: 'Built a Prometheus exporter that monitors rice cooker power consumption, estimates cooking stages, and sends webhook notifications. Because apparently a simple timer wasn\'t good enough for my overengineered lifestyle.',
        complications: 'The power sensor was more expensive than the rice cooker. Kubernetes cluster costs more per month than my rice budget.',
        aftermath: 'Now I have a Kubernetes cluster just to cook rice. My electricity bill increased by 300%. My rice still tastes the same. No regrets.'
      },
      tech: ['Arduino', 'Node.js', 'Prometheus', 'Grafana', 'Kubernetes', 'Docker', 'PostgreSQL'],
      metrics: {
        linesOfCode: 2847,
        timeInvested: '3 weeks',
        actualUsefulness: 12,
        regretLevel: 98
      },
      links: {
        github: 'https://github.com/abhishek/rice-cooker-exporter',
        demo: 'https://rice-metrics.chaos.dev',
        docs: 'https://docs.chaos.dev/rice-monitoring'
      }
    },
    {
      id: 'kubernetes-dating-app',
      title: 'Kubernetes-Native Dating App',
      category: 'fun',
      status: 'abandoned',
      story: {
        problem: 'Dating apps don\'t scale horizontally. What happens when you need to handle multiple crushes with proper load balancing?',
        motivation: 'If I can orchestrate containers, surely I can orchestrate my love life. Auto-scaling based on match rate seemed logical at 2 AM.',
        solution: 'Built a microservices dating platform with separate pods for messaging, matching, and heartbreak recovery. Each conversation runs in its own container.',
        complications: 'Turns out people don\'t want to kubectl their way into relationships. Also, the heartbreak-recovery service kept crashing.',
        aftermath: 'Still single, but my Kubernetes skills are relationship-ready. The app auto-scales better than my dating life.'
      },
      tech: ['Kubernetes', 'Go', 'React', 'Redis', 'MongoDB', 'Istio', 'Helm'],
      metrics: {
        linesOfCode: 5432,
        timeInvested: '2 months',
        actualUsefulness: 5,
        regretLevel: 85
      },
      links: {
        github: 'https://github.com/abhishek/k8s-dating',
        docs: 'https://docs.chaos.dev/dating-architecture'
      }
    },
    {
      id: 'ai-coffee-optimizer',
      title: 'AI-Powered Coffee Brewing Optimizer',
      category: 'ai',
      status: 'still-running',
      story: {
        problem: 'My coffee wasn\'t consistently perfect. Clearly this required machine learning and computer vision.',
        motivation: 'If Netflix can recommend movies, why can\'t AI recommend the perfect coffee brewing parameters based on my mood, weather, and productivity goals?',
        solution: 'Trained a neural network on 500+ coffee brewing sessions with cameras monitoring grind size, water temperature, and my facial expressions during first sip.',
        complications: 'The AI became sentient and now judges my coffee choices. It sends passive-aggressive notifications about my caffeine dependency.',
        aftermath: 'My coffee is 23% better, but I\'m 67% more anxious about AI taking over. The model demands premium beans as tribute.'
      },
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'Node-RED'],
      metrics: {
        linesOfCode: 3421,
        timeInvested: '6 weeks',
        actualUsefulness: 78,
        regretLevel: 23
      },
      links: {
        github: 'https://github.com/abhishek/ai-coffee-optimizer',
        demo: 'https://coffee-ai.chaos.dev',
        docs: 'https://docs.chaos.dev/coffee-ml'
      }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === projectId) || null;
    
    if (!this.project) {
      this.router.navigate(['/solutions-nobody-wanted']);
    }
  }

  getStatusColor(status: string): string {
    const colors = {
      'deployed': '#28a745',
      'still-running': '#00ff41',
      'abandoned': '#6c757d',
      'regretted': '#ff6b6b'
    };
    return colors[status as keyof typeof colors] || '#7d8590';
  }

  getStatusIcon(status: string): string {
    const icons = {
      'deployed': '🚀',
      'still-running': '⚡',
      'abandoned': '💀',
      'regretted': '😅'
    };
    return icons[status as keyof typeof icons] || '❓';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'household': '🏠',
      'ai': '🤖',
      'infrastructure': '⚙️',
      'fun': '🎮'
    };
    return icons[category as keyof typeof icons] || '📁';
  }
}