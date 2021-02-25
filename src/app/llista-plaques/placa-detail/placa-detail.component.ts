import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlaca } from '../i-placa';

@Component({
  selector: 'app-placa-detail',
  templateUrl: './placa-detail.component.html',
})
export class PlacaDetailComponent implements OnInit {
  placa: IPlaca; 
  imge= '';

  constructor(private activatedRoute: ActivatedRoute) { }
  
  auxRatting: number;

  rattingChanged = new EventEmitter<number>();

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(p => {
      this.placa = {name: 'Detalls Placa', localitat: p.localitat ,id: p.id, image: '/assets/img/placa.jpg', ratting:  p.ratting}
      })
    }
  

  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }
}
