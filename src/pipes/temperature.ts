import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Temperature pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'temperature',
})
export class Temperature implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
   let  calc = Math.round(parseInt(value,10) - 273.15);
   return `${calc} C° `;
  }
}
