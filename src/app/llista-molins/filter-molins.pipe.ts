import { Pipe, PipeTransform } from '@angular/core';
import { IMoli } from './i-moli';
@Pipe({
  name: 'filterMolins'
})
export class FilterMolinsPipe implements PipeTransform {

  transform(molins: IMoli[], criteri: string): IMoli[] {
    criteri = criteri ? criteri.toLocaleLowerCase() : null;
    molins = criteri ? molins.filter(p => p.localitat.toLocaleLowerCase().includes(criteri)): molins;
    return molins;

}
}
