import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICentral } from '../i-central';

@Component({
  selector: 'app-llistes-items-central',
  templateUrl: './llistes-items-central.component.html',
})
export class LlistesItemsCentralComponent implements OnInit {

  @Input() central: ICentral; 
  imge= '';
  color = "orange";
  auxRatting: number;

  @Output() rattingChanged = new EventEmitter<number>();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.auxRatting = this.central.ratting;

  }
  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }

}
