import { Movie } from './movie.model';
import { TVShow } from './tv-show.model';

export interface Data {
  page: number;
  results: Movie[] | TVShow[];
  total_pages: number;
  total_results: number;
}
