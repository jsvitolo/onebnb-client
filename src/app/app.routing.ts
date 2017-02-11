import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { Angular2TokenService } from 'angular2-token';
import { ResultsComponent } from './results/results.component';

// Cria nossas rotas
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService] },
    { path: 'results', component: ResultsComponent}
];

// Exporte a constante routinng para importamos ela no arquivo app.modules.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
