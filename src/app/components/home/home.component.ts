import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeTerminalComponent } from '../fake-terminal/fake-terminal.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FakeTerminalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  asciiArt = `
    ╔═══════════════════════════════════════╗
    ║  ABHISHEK.EXE - CHAOS ENGINEER v2.1  ║
    ║  Solutions Nobody Asked For™         ║
    ╚═══════════════════════════════════════╝
  `;
  
  typingText = '';
  fullText = 'Welcome to solutions nobody asked for...';
  typingIndex = 0;
  
  systemStatus = [
    { name: 'Coffee Dependency', value: 94, status: 'CRITICAL' },
    { name: 'Regret Level', value: 78, status: 'HIGH' },
    { name: 'Overengineering', value: 100, status: 'OPTIMAL' },
    { name: 'Sanity Check', value: 12, status: 'FAILED' }
  ];

  ngOnInit() {
    this.startTypingAnimation();
    this.startProgressFlickering();
  }

  private startTypingAnimation() {
    const interval = setInterval(() => {
      if (this.typingIndex < this.fullText.length) {
        this.typingText += this.fullText[this.typingIndex];
        this.typingIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'CRITICAL': return '#ff6b6b';
      case 'HIGH': return '#ffa726';
      case 'OPTIMAL': return '#00ff41';
      case 'FAILED': return '#ff073a';
      default: return '#7d8590';
    }
  }

  private startProgressFlickering() {
    setInterval(() => {
      this.systemStatus.forEach(status => {
        if (status.name === 'Coffee Dependency') {
          status.value = Math.floor(Math.random() * 7) + 92; // 92-98%
        } else if (status.name === 'Regret Level') {
          status.value = Math.floor(Math.random() * 10) + 75; // 75-84%
        }
      });
    }, 3000);
  }
}