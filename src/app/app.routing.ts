import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { Angular2TokenService } from 'angular2-token';

// Cria nossas rotas
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

// Exporte a constante routinng para importamos ela no arquivo app.modules.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
