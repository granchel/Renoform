import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMoli } from '../i-moli';

@Component({
  selector: 'app-llistes-items-moli',
  templateUrl: './llistes-items-moli.component.html',
 
})
export class LlistesItemsMoliComponent implements OnInit {
  @Input() moli: IMoli; 
  imge= '';

  auxRatting: number;

  @Output() rattingChanged = new EventEmitter<number>();
  color = "orange";
  constructor() { }

  ngOnInit(): void {
    
    this.auxRatting = this.moli.ratting;
  }

  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }
}
