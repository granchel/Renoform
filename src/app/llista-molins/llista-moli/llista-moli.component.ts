import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMoli } from '../i-moli';
import { MolinsService } from '../molins.service';

@Component({
  selector: 'app-llista-placa',
  templateUrl: './llista-moli.component.html',
  
})
export class LlistaMoliComponent implements OnInit {
  
  molins: IMoli[];

  /*molins: IMoli[] = [{name: 'Moli', id: 1, ratting: 2},
  {name:'Moli', id:2, ratting: 2},
  {name:'Moli', id:3, ratting: 2},
  {name:'Moli', id:4, ratting: 2},
  {name:'Moli', id:5, ratting: 2}
]*/

searchProduct: string;
criteri: string = '';
  constructor(private router: Router,
    private molinsService: MolinsService) { }

  ngOnInit(): void {
    this.molinsService.getPlaques().subscribe(
      moli => this.molins = moli, // Success function
      error => console.error(error), // Error function (optional)
      () => console.log('Products loaded') // Finally function (optional)
      );
  }
  
  changeRatting(stars: number, moli: IMoli): void {
    moli.ratting = stars;
    }

}
