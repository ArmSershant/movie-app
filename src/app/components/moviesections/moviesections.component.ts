import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResults } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviesections',
  templateUrl: './moviesections.component.html',
  styleUrls: ['./moviesections.component.css'],
})
export class MoviesectionsComponent {
  movies$!: Observable<MovieResults>;
  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.getTodayMovies();
  }

  @Input() tabs!: string[];
  @Input() title!: string;
  @Input() bgImg:boolean = false

  img="bg-[url('https://img.freepik.com/free-vector/background-gradient-line-digital-abstract_483537-2921.jpg')]"

  getMoviesByDate(data: string) {
    let date = '';
    // Trending
    if (data == 'Today') {
      date = 'day';
      this.movies$ = this.movieService.getMoviesByDate(date);
    }
    if (data == 'This week') {
      date = 'week';
      this.movies$ = this.movieService.getMoviesByDate(date);
    }
    // What's Popular
    if (data == 'Streaming') {
      this.movies$ = this.movieService.getTrailersByGenre(data);
    }
    if (data == 'On TV') {
      this.movies$ = this.movieService.getTrailersByGenre(data);
    }
    if (data == 'In Teathers') {
      this.movies$ = this.movieService.getTrailersByGenre(data);
    }
    if (data == 'For Rent') {
      this.movies$ = this.movieService.getTrailersByGenre(data);
    }
    // Free To Watch
    if (data == 'Movies') {
      this.movies$ = this.movieService.getMovies();
    }
    if (data == 'TV') {
      this.movies$ = this.movieService.getTVShows();
    }
  }
}
