import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './manage-contacts/add-contact/contact-form.component';
import { ManageContactComponent } from './manage-contacts/manage-contact.component';
import { ContactListComponent } from './manage-contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './manage-contacts/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todos/todo-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { LoaderComponent } from './loader/loader.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ArrayToStringPipe } from './pipes/arraytostring.pipe';
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotfoundComponent,
    WelcomeComponent,
    ContactFormComponent,
    ManageContactComponent,
    ContactListComponent,
    ContactDetailsComponent,
    TodoListComponent,
    TodoDetailsComponent,
    LoaderComponent,
    CapitalizePipe,
    ArrayToStringPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
