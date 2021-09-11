import {EntityService} from "./base/entity.service";
import {Category} from "../_model/category";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Movie} from "../_model/movie";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class MovieService extends EntityService<Movie> {
  constructor(protected http: HttpClient) {
    super(http, "/movies.json");
  }

  getAllMovies(): Observable<Movie[]> {
    return this.getAll().pipe(
      map(data => {
        const movies: Movie[] = [];

        for (const key in data)
          movies.push({...data[key], id: key});

        return movies;
      }),
    );
  }

}
