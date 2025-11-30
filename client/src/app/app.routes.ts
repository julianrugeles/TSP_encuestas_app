import { Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'register-company', component: RegisterCompanyComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];
