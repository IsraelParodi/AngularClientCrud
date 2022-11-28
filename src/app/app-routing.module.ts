import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: ClientTableComponent,
  },
  {
    path: 'client',
    component: ClientTableComponent,
  },
  {
    path: 'client/create',
    component: ClientFormComponent,
  },
  {
    path: 'client/edit/:id',
    component: ClientFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
