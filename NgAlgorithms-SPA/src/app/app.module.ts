import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SortingComponent } from './sorting/sorting.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      SortingComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
