import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CategoryComponent} from './components/category/category.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {MoviesComponent} from './components/movies-home/movies/movies.component';
import {AuthComponent} from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./_service/auth.interceptor";
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { AddMovieComponent } from './components/movies-home/add-movie/add-movie.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import {ResponseInterceptor} from "./_service/response-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    AuthComponent,
    MoviesHomeComponent,
    AddMovieComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
