import { Component, ElementRef, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  movie: Movie = {
    adult: false,
    backdrop_path: null,
    genres: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: null,
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    belongs_to_collection: null,
    budget: 0,
    homepage: '',
    imdb_id: 0,
    production_companies: [],
    production_countries: [],
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
  };
  releaseDetails: { countryCode: any; releaseDate: any; certification: any } = {
    countryCode: undefined,
    releaseDate: undefined,
    certification: undefined,
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.apiService.getMovie(id).subscribe((data) => {
        this.movie = data;
      });
      this.apiService.getMovieReleaseDates(id).subscribe((data) => {
        data.subscribe((res) => {
          this.releaseDetails = res;
        });
      });
    });
  }
}
