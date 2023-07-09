import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultMovieListComponent } from './components/search/search-result/search-result-list/search-result-movie-list/search-result-movie-list.component';
import { SearchResultTVShowListComponent } from './components/search/search-result/search-result-list/search-result-tv-show-list/search-result-tv-show-list.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      { path: 'movie', component: SearchResultMovieListComponent },
      { path: 'tv', component: SearchResultTVShowListComponent },
    ],
  },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv/:id', component: TvShowComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
