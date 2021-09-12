import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../_service/movie.service";
import {Movie} from "../../../_model/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

}
