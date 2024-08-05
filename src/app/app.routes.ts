import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApidataComponent } from './apidata/apidata.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApidataComponent },
  { path: 'form', component: FormComponent },
];
