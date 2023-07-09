import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchedMoviesListService {
  private searchedMoviesListSubject: BehaviorSubject<Data> =
    new BehaviorSubject<Data>({});
  public searchedMoviesList$: Observable<Data> =
    this.searchedMoviesListSubject.asObservable();

  setSearchedMoviesList(data: Data) {
    this.searchedMoviesListSubject.next(data);
  }
}
