import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResults } from 'src/app/models/movie.model';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private movieService: MovieService) {
    this.trailers$ = this.movieService.getTrailers();
  }
  // Trailers
  trailers$!: Observable<any>;
  tabs2 = ['Streaming', 'On TV', 'For Rent', 'In Teathers'];
  getMoviesByGenre(data: string): any {
    this.trailers$ = this.movieService.getTrailersByGenre(data);
  }
  // Join
  joinText = [
    'Enjoy TMDB ad free',
    'Maintain a personal watchlist',
    'Filter by your subscribed streaming services and find something to watch',
    "Log the movies and TV shows you've seen",
    'Build custom lists',
    'Contribute to and improve our database',
  ];
  // Leaderboard
  data: User[] = [
    { name: 'Boon', firstNumber: 106734, secondNumber: 37383 },
    { name: 'heli5m', firstNumber: 78511, secondNumber: 18300 },
    { name: 'qualitylover', firstNumber: 379597, secondNumber: 5691 },
    { name: 'talestalker', firstNumber: 920954, secondNumber: 4471 },
    { name: 'AnCat', firstNumber: 2982, secondNumber: 2888 },
    { name: 'RuiZafon', firstNumber: 516176, secondNumber: 21898 },
    { name: 'Роман', firstNumber: 38050, secondNumber: 15027 },
    { name: 'Sheigutn', firstNumber: 497542, secondNumber: 5171 },
    { name: 'raze464', firstNumber: 558069, secondNumber: 3545 },
    { name: 't0by', firstNumber: 265390, secondNumber: 2707 },
  ];
}
