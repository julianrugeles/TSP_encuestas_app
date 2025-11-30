import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <main class="flex-1 p-10">
      <h1 class="text-2xl font-bold text-[#3D4E43] dark:text-white">Dashboard</h1>
      <p class="mt-2 text-[#6D7A71] dark:text-gray-400">Contenido principal de la página.</p>
    </main>
  `
})
export class DashboardComponent { }
