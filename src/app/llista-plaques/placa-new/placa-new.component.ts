import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-placa-new',
  templateUrl: './placa-new.component.html',
})
export class PlacaNewComponent implements OnInit {

  formPlaca: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  crearFormulario(){
  this.formPlaca = this.formBuilder.group({
      id: ['',[Validators.required, Validators.minLength(3)]],
      name: ['',Validators.required],
      localitat: ['',Validators.required],
      energia: ['',Validators.required],
    });
  }

  get idValid(){
    const control = this.formPlaca.get('id');
  if (!control.touched){ return null;}
  else{
    return control.valid
  }
  }

  get nameValid(){
    return this.formPlaca.get('name');
  }

  get localitatValid(){
    return this.formPlaca.get('localitat');
  }

  get energiaValid(){
    return this.formPlaca.get('energia');
  }


  ngOnInit(): void {
    this.crearFormulario();
  }
}
