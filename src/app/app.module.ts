import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api } from './services/Api.compnent';
import { SignupComponent } from './signup/signup.component';
import {FormsModule}  from'@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
 
  ],
  imports: [


  BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule

  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
