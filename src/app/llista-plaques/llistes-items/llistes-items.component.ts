import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { IPlaca } from '../i-placa';

@Component({
  selector: 'app-llistes-items',
  templateUrl: './llistes-items.component.html',
  
})
export class LlistesItemsComponent implements OnInit {
  @Input() placa: IPlaca; 
  imge= '';

  auxRatting: number;

  @Output() rattingChanged = new EventEmitter<number>();
  
  constructor(private router: Router) { }
  color = "orange";

  ngOnInit(): void {
    this.auxRatting = this.placa.ratting;
  }

  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }
}
