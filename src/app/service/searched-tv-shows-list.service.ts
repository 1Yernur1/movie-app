import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchedTvShowsListService {
  private searchedTVShowsListSubject: BehaviorSubject<Data> =
    new BehaviorSubject<Data>({});
  public searchedTVShowsList$: Observable<Data> =
    this.searchedTVShowsListSubject.asObservable();

  setSearchedTVShowsList(data: Data) {
    this.searchedTVShowsListSubject.next(data);
  }
}
