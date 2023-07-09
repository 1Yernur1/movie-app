import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchQuery: string = '';
  isInputFocused: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
    });
  }

  search() {
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchQuery },
    });
  }

  onInputFocus() {
    this.isInputFocused = true;
  }
}
