import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainpipe',
})
export class MainpipePipe implements PipeTransform {
  transform(): unknown {
    return null;
  }
}
