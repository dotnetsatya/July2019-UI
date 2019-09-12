/**
  * Usage: array | arraytoString:'property'
 **/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arraytoString',
})
export class ArrayToStringPipe implements PipeTransform {

    transform(value: any, property: string) {
        if (value == null) { return ''; } // !value would also react to zeros.
        var resultString = "";
        if (!property) { 
            resultString = value.map(function(elem){
                return elem
            }).join(", ");
        }else{
            resultString = value.map(function(elem){
                return elem[property]
            }).join(", ");
        }

        return resultString;
    }
}
