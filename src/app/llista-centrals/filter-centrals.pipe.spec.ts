import { Pipe, PipeTransform } from '@angular/core';
import { ICentral } from './i-central';

@Pipe({
  name: 'filterCentrals'
})
export class FilterCentralsPipe implements PipeTransform {

  transform(centrals: ICentral[], criteri: string): ICentral[] {
    criteri = criteri ? criteri.toLocaleLowerCase() : null;
    centrals = criteri ? centrals.filter(p => p.localitat.toLocaleLowerCase().includes(criteri)): centrals;
    return centrals;

  }

}