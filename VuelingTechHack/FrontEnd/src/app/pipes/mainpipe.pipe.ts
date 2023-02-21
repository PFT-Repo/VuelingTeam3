import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainpipe'
})
export class MainpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
