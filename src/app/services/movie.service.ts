import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResults } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private discover = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  private movies = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private date = 'https://api.themoviedb.org/3/trending/all/';
  private tvShow = 'https://api.themoviedb.org/3/tv/popular?api_key=';
  private streamings =
    'https://api.themoviedb.org/3/watch/providers/tv?api_key=';
  private inTheaters =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  private forRent =
    'https://api.themoviedb.org/3/watch/providers/movie?api_key=';
  private apiKey = 'c105108fe99ec6e418dec48194a8555d';
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(this.movies + this.apiKey + '&language=en-US&page=1')
  }
  getMoviesByDate(date: string) {
    return this.http.get<any>(this.date + date + '?api_key=' + this.apiKey);
  }

  getTodayMovies(): Observable<MovieResults> {
    return this.http.get<any>(this.date + 'day?api_key=' + this.apiKey);
  }

  getTVShows() {
    return this.http.get<any>(this.tvShow + this.apiKey + '&language=en-US&page=1');
  }

  getTrailers(): Observable<any> {
    return this.http.get<any>(this.discover + this.apiKey + '&with_genres=28');
  }

  getTrailersByGenre(genre: string): any {
    if (genre == 'In Teathers')
      return this.http.get<any>(
        this.inTheaters + this.apiKey + '&language=en-US&page=1'
      );
    if (genre == 'For Rent')
      return this.http.get<any>(
        this.discover + this.apiKey + '&with_genres=99'
      );
    if (genre == 'On TV')
      return this.http.get<any>(
        this.discover + this.apiKey + '&with_genres=10770'
      );
    if (genre == 'Streaming')
      return this.http.get<any>(
        this.discover + this.apiKey + '&with_genres=10770'
      );
  }
}
