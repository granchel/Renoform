import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICentral } from '../i-central';

@Component({
  selector: 'app-central-detail',
  templateUrl: './central-detail.component.html',
  styleUrls: ['./central-detail.component.css']
})
export class CentralDetailComponent implements OnInit {
  central: ICentral;
  rattingChanged: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  auxRatting: number;



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.central = {name: 'Detalls Central', localitat: p.localitat , id: p.id, image: '/assets/img/placa.jpg', ratting: 2 }
      })
  }
  puntuar(i: number): void {
    this.rattingChanged.emit(i);
  }

}
