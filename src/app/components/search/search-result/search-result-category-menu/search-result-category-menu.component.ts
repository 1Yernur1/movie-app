import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchedMoviesListService } from 'src/app/service/searched-movies-list.service';
import { SearchedTvShowsListService } from 'src/app/service/searched-tv-shows-list.service';

@Component({
  selector: 'app-search-result-category-menu',
  templateUrl: './search-result-category-menu.component.html',
  styleUrls: ['./search-result-category-menu.component.scss'],
})
export class SearchResultCategoryMenuComponent {
  moviesCount: number | undefined;
  tvShowsCount: number | undefined;

  constructor(
    private router: Router,
    private searchedMoviesListService: SearchedMoviesListService,
    private searchedTVShowsListService: SearchedTvShowsListService
  ) {}

  ngAfterContentChecked(): void {
    this.searchedMoviesListService.searchedMoviesList$.subscribe((data) => {
      this.moviesCount = data['total_results'];
    });
    this.searchedTVShowsListService.searchedTVShowsList$.subscribe((data) => {
      this.tvShowsCount = data['total_results'];
    });
  }

  getSearchedMoviesList() {
    this.router.navigate(['search/movie'], { queryParamsHandling: 'merge' });
    // this.searchedMoviesListService.searchedMoviesList$.subscribe((data) => {
    //   console.log(data);
    // });
  }

  getSearchedTVShowsList() {
    this.router.navigate(['search/tv'], { queryParamsHandling: 'merge' });
    // this.searchedTVShowsListService.searchedTVShowsList$.subscribe((data) => {
    //   console.log(data);
    // });
  }
}
