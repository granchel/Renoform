import { Pipe, PipeTransform } from '@angular/core';
import { IPlaca } from './i-placa';

@Pipe({
  name: 'filterPlaques'
})
export class FilterPlaquesPipe implements PipeTransform {

  transform(plaques: IPlaca[], criteri: string): IPlaca[] {
    criteri = criteri ? criteri.toLocaleLowerCase() : null;
    plaques = criteri ? plaques.filter(p => p.localitat.toLocaleLowerCase().includes(criteri)): plaques;
    return plaques;

  }

}
