import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     const id = params['id'];
  //     this.apiService.getMovieCredits(id).subscribe((data) => {
  //       console.log(data);
  //     });
  //   });
  // }
}
