import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidenavComponent],
    template: `
    <div class="flex h-screen bg-background-light dark:bg-background-dark font-display text-[#3D4E43] dark:text-gray-300">
      <app-sidenav></app-sidenav>
      <div class="flex flex-1 flex-col overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class MainLayoutComponent { }
