import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { SearchedMoviesListService } from 'src/app/service/searched-movies-list.service';

@Component({
  selector: 'app-search-result-movie-list',
  templateUrl: './search-result-movie-list.component.html',
  styleUrls: ['./search-result-movie-list.component.scss'],
})
export class SearchResultMovieListComponent {
  searchedMoviesList: Movie[] = [];
  constructor(
    private searchedMoviesListService: SearchedMoviesListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.searchedMoviesListService.searchedMoviesList$.subscribe((data) => {
      // data['results'].forEach((movie: Movie) => {
      //   this.searchedMoviesList.push(movie);
      // });
      this.searchedMoviesList = data['results'];
    });
  }

  getMovieData(id: number) {
    this.router.navigate(['movie', id]);
  }
}
