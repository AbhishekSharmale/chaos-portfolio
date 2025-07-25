import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'Solutions Nobody Asked For™';
  currentRoute = '';
  showNotification = false;
  notificationText = '';
  consoleLogs = [
    { timestamp: '12:34:56', level: 'INFO', message: 'User probably thinks this is real code' },
    { timestamp: '12:35:02', level: 'WARN', message: 'Coffee levels critically low' },
    { timestamp: '12:35:15', level: 'ERROR', message: 'Sanity check failed, continuing anyway' }
  ];

  chaosMessages = [
    { level: 'INFO', message: 'User probably thinks this is real code' },
    { level: 'WARN', message: 'Coffee levels critically low - productivity may vary' },
    { level: 'ERROR', message: 'Sanity check failed, continuing anyway' },
    { level: 'DEBUG', message: 'Why are you reading the console logs?' },
    { level: 'FATAL', message: 'Weekend project became production system' },
    { level: 'SUCCESS', message: 'Successfully failed at failing successfully' },
    { level: 'ALERT', message: 'Developer may be having too much fun' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
    
    this.startChaosConsole();
  }

  private startChaosConsole() {
    setInterval(() => {
      const randomMessage = this.chaosMessages[Math.floor(Math.random() * this.chaosMessages.length)];
      const timestamp = new Date().toLocaleTimeString();
      
      this.consoleLogs.push({
        timestamp,
        level: randomMessage.level,
        message: randomMessage.message
      });
      
      if (this.consoleLogs.length > 5) {
        this.consoleLogs.shift();
      }
    }, 5000);
    
    this.startRandomNotifications();
  }
  
  private startRandomNotifications() {
    const notifications = [
      'Deployment Failed Successfully',
      'Coffee Machine Offline - Panic Mode Activated',
      'Kubernetes Cluster Achieved Sentience',
      'Error 418: I\'m a teapot'
    ];
    
    setInterval(() => {
      if (!this.showNotification && Math.random() < 0.3) {
        this.notificationText = notifications[Math.floor(Math.random() * notifications.length)];
        this.showNotification = true;
        
        setTimeout(() => {
          this.showNotification = false;
        }, 4000);
      }
    }, 10000);
  }
  
  closeNotification() {
    this.showNotification = false;
  }
}
