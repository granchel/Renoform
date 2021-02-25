import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoli } from '../i-moli';

@Component({
  selector: 'app-molins-detail',
  templateUrl: './molins-detail.component.html',
 
})
export class MolinsDetailComponent implements OnInit {
  moli: IMoli;
  rattingChanged: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  auxRatting: number;



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.moli = {name: 'Detalls Moli', localitat: p.localitat , id: p.id, image: '/assets/img/placa.jpg', ratting: 2 }
      })
  }
  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }

}
