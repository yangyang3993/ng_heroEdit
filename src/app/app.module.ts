import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HeroDetailComponent } from './app.hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component'

import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'./dashboard',
        pathMatch:'full'
      },
  		{
  			path:'heroes',
  	   		component:HeroesComponent
  		},
  		{
  			path:'dashboard',
  			component:DashboardComponent
  		},
  		{
        path:'detail/:id',
        component:HeroDetailComponent
      },

  	])
  ],

  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
