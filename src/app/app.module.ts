import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import{routing} from './app.route';
import {HttpModule} from '@angular/http';




import { AppComponent } from './app.component';


import { SkillsComponent } from './skills/skills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
    SkillsComponent,
    AboutmeComponent,
    HomeComponent,
    WorkComponent,

    
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule, 
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
