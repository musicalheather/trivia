import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Route[] = [
  { path: 'trivia', component: TriviaComponent },
  { path: '', component: TriviaComponent } ,
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, TriviaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
