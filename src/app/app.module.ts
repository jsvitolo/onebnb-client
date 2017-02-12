import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule, AlertModule, ButtonsModule, DatePickerComponent,
         DatepickerModule, CollapseModule, ModalModule,
         PaginationModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { Property } from './shared/property';
import { PropertiesService } from './shared/properties.service';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './shared/search/search.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FilterComponent } from './shared/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UserEditComponent,
    ResultsComponent,
    SearchComponent,
    PaginationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [PropertiesService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
