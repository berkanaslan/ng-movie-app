import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies-home/movies/movies.component";
import {AuthComponent} from "./components/auth/auth.component";
import {AuthGuards} from "./core/guards/auth.guards";
import {MoviesHomeComponent} from "./components/movies-home/movies-home.component";

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch: "full"},
  {
    path: "movies", component: MoviesHomeComponent,
    canActivate: [AuthGuards],
    children: [
      {path: "", component: MoviesComponent}
    ],
  },
  {path: "auth", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
