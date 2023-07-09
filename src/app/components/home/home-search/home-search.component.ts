import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchQuery },
    });
  }
}
