import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { BicycleListComponent } from './bicycle-list/bicycle-list.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login-reg/login/login.component';
import { RegisterComponent } from './login-reg/register/register.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { NewBicycleComponent } from './user/new-bicycle/new-bicycle.component';
import { EditBicycleComponent } from './user/edit-bicycle/edit-bicycle.component';
import { BicycleService } from './bicycle.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    LoggedInComponent,
    BicycleListComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    BicycleComponent,
    NewBicycleComponent,
    EditBicycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
