import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome-to-chaos', pathMatch: 'full' },
  { path: 'welcome-to-chaos', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'solutions-nobody-wanted', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'project/:id', loadComponent: () => import('./components/project-detail/project-detail.component').then(m => m.ProjectDetailComponent) },
  { path: 'digital-diary-of-despair', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'readme-dot-md', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: '**', redirectTo: '/welcome-to-chaos' }
];
