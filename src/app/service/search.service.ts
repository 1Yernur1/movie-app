import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchedMovieListSubject: Subject<Data> = new Subject();
  public searchedMovieList$: Observable<Data> =
    this.searchedMovieListSubject.asObservable();

  setSearchedMoviesList(data: Data) {
    this.searchedMovieListSubject.next(data);
  }
}
