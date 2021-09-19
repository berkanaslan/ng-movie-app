import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies-home/movies/movies.component";
import {AuthComponent} from "./components/auth/auth.component";
import {AuthGuards} from "./core/guards/auth.guards";
import {MoviesHomeComponent} from "./components/movies-home/movies-home.component";
import {AddMovieComponent} from "./components/movies-home/add-movie/add-movie.component";
import {AddCategoryComponent} from "./components/category/add-category/add-category.component";

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch: "full"},
  {path: "auth", component: AuthComponent},
  {
    path: "movies", component: MoviesHomeComponent,
    canActivate: [AuthGuards],
    children: [
      {path: "", component: MoviesComponent},
      {path: "add", component: AddMovieComponent},
      {path: "category/add", component: AddCategoryComponent, canActivate: [AuthGuards]},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
