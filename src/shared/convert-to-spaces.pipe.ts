import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string) {
    const newValue = value.replace (character, ' ');
    return newValue.replace (character, ' ');
  }
}
