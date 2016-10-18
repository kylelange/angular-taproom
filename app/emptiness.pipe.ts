import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform (input: Keg[], emptyKeg){
    var output: Keg[] = [];
    if (emptyKeg === "is Empty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }
}
