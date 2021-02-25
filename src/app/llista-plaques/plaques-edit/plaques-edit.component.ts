import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPlaca } from '../i-placa';
import { PlacaServiceService } from '../placa-service.service';

@Component({
  selector: 'app-plaques-edit',
  templateUrl: './plaques-edit.component.html',
})
export class PlaquesEditComponent implements OnInit {

  placa: IPlaca;
  @ViewChild('placaForm',{static:true}) placaForm: NgForm;


  constructor(private activatedRoute: ActivatedRoute,
    private plaquesServiceService: PlacaServiceService ) { }

  ngOnInit(): void {
    this.placa = this.activatedRoute.snapshot.data['placa'];
  }

  editar(){

    console.log(this.placa);
    this.plaquesServiceService.editPlaca(this.placaForm.value).subscribe(
      p => this.placa = p
    );
    return false;

  }
}