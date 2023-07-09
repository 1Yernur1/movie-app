import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SearchedMoviesListService } from 'src/app/service/searched-movies-list.service';
import { SearchedTvShowsListService } from 'src/app/service/searched-tv-shows-list.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private searchedMoviesList: SearchedMoviesListService,
    private searchedTVShowsList: SearchedTvShowsListService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const searchQuery = params['query'];
      this.apiService.getSearchedMoviesList(searchQuery).subscribe((data) => {
        this.searchedMoviesList.setSearchedMoviesList(data);
      });
      this.apiService.getSearchedTVShowsList(searchQuery).subscribe((data) => {
        this.searchedTVShowsList.setSearchedTVShowsList(data);
      });
    });
  }
}
