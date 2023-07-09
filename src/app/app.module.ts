import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HomeSearchComponent } from './components/home/home-search/home-search.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { SearchResultCategoryMenuComponent } from './components/search/search-result/search-result-category-menu/search-result-category-menu.component';
import { SearchResultListComponent } from './components/search/search-result/search-result-list/search-result-list.component';
import { SearchResultMovieListComponent } from './components/search/search-result/search-result-list/search-result-movie-list/search-result-movie-list.component';
import { SearchResultTVShowListComponent } from './components/search/search-result/search-result-list/search-result-tv-show-list/search-result-tv-show-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { MovieInfoComponent } from './components/movie/movie-info/movie-info.component';
import { DurationPipe } from './pipe/duration.pipe';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HomeSearchComponent,
    SearchBarComponent,
    SearchResultComponent,
    SearchResultCategoryMenuComponent,
    SearchResultListComponent,
    SearchResultMovieListComponent,
    SearchResultTVShowListComponent,
    MovieComponent,
    TvShowComponent,
    MovieInfoComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
