import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
//import {LoginService} from './login.service';

/*const routes: Routes = [
                        {
                          path: 'orders',
                          component: AppComponent
                        }
                      ];*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      //HttpClientModule,
      
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule//,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
