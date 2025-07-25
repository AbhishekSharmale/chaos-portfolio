import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fake-terminal',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fake-terminal">
      <div class="terminal-header">
        <span class="terminal-title">abhishek@chaos:~</span>
      </div>
      <div class="terminal-body">
        <div *ngFor="let line of history" [ngClass]="'line-' + line.type">
          {{ line.content }}
        </div>
        <div class="input-line">
          <span class="prompt">$ </span>
          <input [(ngModel)]="input" (keydown.enter)="execute()" class="terminal-input">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .fake-terminal {
      background: var(--darker-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      margin: 20px 0;
    }
    .terminal-header {
      background: var(--dark-bg);
      padding: 8px 16px;
      border-bottom: 1px solid var(--border-color);
    }
    .terminal-title { color: var(--matrix-green); }
    .terminal-body { padding: 16px; height: 200px; overflow-y: auto; }
    .line-output { color: var(--text-light); margin-bottom: 4px; }
    .line-error { color: var(--error-red); margin-bottom: 4px; }
    .input-line { display: flex; align-items: center; }
    .prompt { color: var(--matrix-green); }
    .terminal-input {
      background: transparent;
      border: none;
      color: var(--text-light);
      font-family: inherit;
      outline: none;
      flex: 1;
      margin-left: 4px;
    }
  `]
})
export class FakeTerminalComponent {
  input = '';
  history = [
    { type: 'output', content: 'Welcome to Chaos Terminal v2.1' },
    { type: 'output', content: 'Type "help" for commands' }
  ];

  execute() {
    if (!this.input.trim()) return;
    
    this.history.push({ type: 'output', content: `$ ${this.input}` });
    
    const commands: { [key: string]: string } = {
      help: 'Available: help, ls, whoami, pwd, clear, exit',
      ls: 'regrets.log  social_life.txt  coffee_budget.xlsx',
      whoami: 'Someone who reads source code for fun',
      pwd: '/home/chaos/solutions-nobody-asked-for',
      clear: '',
      exit: 'You can\'t escape that easily'
    };
    
    if (this.input === 'clear') {
      this.history = [];
    } else {
      const output = commands[this.input] || `Command not found: ${this.input}`;
      if (output) this.history.push({ type: 'output', content: output });
    }
    
    this.input = '';
  }
}