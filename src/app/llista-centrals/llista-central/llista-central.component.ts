import { Component, OnInit } from '@angular/core';
import { CentralsService } from '../centrals.service';
import { ICentral } from '../i-central';

@Component({
  selector: 'app-llista-central',
  templateUrl: './llista-central.component.html',
})
export class LlistaCentralComponent implements OnInit {
  centrals: ICentral[];
  /*centrals: ICentral[] = [{name: 'Central', id: 1, ratting: 2},
  {name:'Central', id:2, ratting: 2},
  {name:'Central', id:3, ratting: 2},
  {name:'Central', id:4, ratting: 2},
  {name:'Central', id:5, ratting: 2}
]*/
criteri: string = '';
searchProduct: string;
  constructor(private centralsService: CentralsService) { }

  ngOnInit(): void {
    this.centralsService.getCentrals().subscribe(
      central => this.centrals = central, // Success function
      error => console.error(error), // Error function (optional)
      () => console.log('Products loaded') // Finally function (optional)
      );
  }

  changeRatting(stars: number, central: ICentral): void {
    central.ratting = stars;
    }

}
