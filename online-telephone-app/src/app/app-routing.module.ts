import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ManageContactComponent } from './manage-contacts/manage-contact.component';
import { ContactFormComponent } from './manage-contacts/add-contact/contact-form.component';
import { TodoListComponent } from './todos/todo-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/deactivate-guard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate : [AuthGuard] },
  { path: 'contacts', component: ManageContactComponent, canActivate: [AuthGuard] },
  { path: 'add-contact', component: ContactFormComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]},
  { path: 'add-contact/:id', component: ContactFormComponent , canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'todo-details/:id', component: TodoDetailsComponent, canActivate: [AuthGuard] },
  { path: 'angular-material', component: AngularMaterialComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
