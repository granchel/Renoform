import { Component, OnInit } from '@angular/core';
import { IPlaca } from '../i-placa';
import { PlacaServiceService } from '../placa-service.service';

@Component({
  selector: 'app-llista-placa',
  templateUrl: './llista-placa.component.html',
  
})
export class LlistaPlacaComponent implements OnInit {
  /*
  plaques: IPlaca[] = [{name: 'Placa', id: 1, ratting: 2},
  {name:'Placa', id:2, ratting: 2},
  {name:'Placa', id:3, ratting: 2},
  {name:'Placa', id:4, ratting: 2},
  {name:'Placa', id:5, ratting: 2}
]*/

searchProduct: string;

  plaques: IPlaca[];
  criteri: string = '';
  constructor(private placaServiceService: PlacaServiceService) { }

  ngOnInit(): void {
    this.placaServiceService.getPlaques().subscribe(
      placa => this.plaques = placa, // Success function
      error => console.error(error), // Error function (optional)
      () => console.log('Products loaded') // Finally function (optional)
      );
  }
  
  changeRatting(stars: number, placa: IPlaca): void {
    placa.ratting = stars;
    }

}
