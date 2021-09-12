import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch: "full"},
  {path: "movies", component: MoviesComponent},
  {path: "auth", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
