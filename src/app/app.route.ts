import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';

import { HomeComponent} from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkComponent} from './work/work.component';





export const routes:Routes = [
    {
       path:'',
       redirectTo:'/home',
       pathMatch:'full'
   },
   {
       path:'home',
       component: HomeComponent,
   },
   {
       path: 'skills',
       component: SkillsComponent,
   },
   {
       path:'aboutme',
       component: AboutmeComponent,
   },
   {
        path:'work',
        component: WorkComponent,
   }
   
]
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);