import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hoursDisplay = hours > 0 ? `${hours}h` : '';
    const minutesDisplay = minutes > 0 ? `${remainingMinutes}m` : '';
    return `${hoursDisplay} ${minutesDisplay}`.trim();
  }
}
