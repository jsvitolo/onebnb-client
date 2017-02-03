import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

// Cria nossas rotas
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent}
];

// Exporte a constante routinng para importamos ela no arquivo app.modules.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
