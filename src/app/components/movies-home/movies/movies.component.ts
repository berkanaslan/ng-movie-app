import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../_service/movie.service";
import {Movie} from "../../../_model/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      this.filteredMovies = this.movies;
    });

    this.route.params.subscribe(params => {
      const categoryId: string = params["categoryId"];

      if (categoryId != null)
        this.filteredMovies = this.movies.filter(movie => movie.categoryId == categoryId);
      else
        this.filteredMovies = this.movies;
    });
  }
}
