import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TVShow } from 'src/app/model/tv-show.model';
import { ApiService } from 'src/app/service/api.service';
import { SearchedTvShowsListService } from 'src/app/service/searched-tv-shows-list.service';

@Component({
  selector: 'app-search-result-tv-show-list',
  templateUrl: './search-result-tv-show-list.component.html',
  styleUrls: ['./search-result-tv-show-list.component.scss'],
})
export class SearchResultTVShowListComponent {
  searchedTVShowsList: TVShow[] = [];

  constructor(
    private router: Router,
    private searchedTVShowsListService: SearchedTvShowsListService
  ) {}

  ngOnInit() {
    this.searchedTVShowsListService.searchedTVShowsList$.subscribe((data) => {
      // data['results'].forEach((tvShow: TVShow) => {
      //   this.searchedTVShowsList.push(tvShow);
      // });
      this.searchedTVShowsList = data['results'];
      console.log(data);
    });
  }

  getTVShowData(id: number) {
    this.router.navigate(['tv', id]);
  }
}
