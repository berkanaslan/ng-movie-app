import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CategoryComponent} from './components/category/category.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MoviesComponent} from './components/movies/movies.component';
import {AuthComponent} from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./_service/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
