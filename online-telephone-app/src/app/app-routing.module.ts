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
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contacts', component: ManageContactComponent },
  { path: 'add-contact', component: ContactFormComponent },
  { path: 'add-contact/:id', component: ContactFormComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
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
