import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../model/data.model';
import { Movie } from '../model/movie.model';
import { TVShow } from '../model/tv-show.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '0967d1ac4e74d1a85ca10d184692a5b2';

  constructor(private http: HttpClient) {}

  getSearchedMoviesList(query: string) {
    return this.http.get<Data>(
      `${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}`
    );
  }

  getSearchedTVShowsList(query: string) {
    return this.http.get<Data>(
      `${this.apiUrl}/search/tv?query=${query}&api_key=${this.apiKey}`
    );
  }

  getMovie(id: number) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getTVShow(id: number) {
    return this.http.get<TVShow>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getTVShowCredits(id: number) {
    return this.http.get(
      `${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieReleaseDates(id: number) {
    return this.getUserCountryCode().pipe(
      map((countryCode: string) => {
        const url = `${this.apiUrl}/movie/${id}/release_dates?api_key=${this.apiKey}`;
        return { url, countryCode };
      }),
      map(({ url, countryCode }: { url: string; countryCode: string }) => {
        return this.http.get(url).pipe(
          map((response: any) => {
            const releaseDates = response.results;
            const releaseDateCountry = releaseDates.find(
              (rd: any) => rd.iso_3166_1 === countryCode
            );
            const certification = this.getMovieCertification(response);

            if (releaseDateCountry) {
              return {
                countryCode,
                releaseDate: releaseDateCountry.release_dates[0].release_date,
                certification,
              };
            } else {
              return {
                countryCode: releaseDates[0]?.iso_3166_1,
                releaseDate: releaseDates[0]?.release_dates[0].release_date,
                certification,
              };
            }
          })
        );
      })
    );
  }

  getUserCountryCode() {
    return this.http.get('https://ipapi.co/json/').pipe(
      map((ipResponse: any) => {
        return ipResponse.country_code;
      })
    );
  }

  getMovieCertification(movieDetails: any) {
    const results = movieDetails.results;

    for (const result of results) {
      if (result.iso_3166_1 === 'US') {
        return result.release_dates[0].certification;
      }
    }

    return '';
  }
}
