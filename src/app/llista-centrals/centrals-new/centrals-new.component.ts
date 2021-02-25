import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-centrals-new',
  templateUrl: './centrals-new.component.html',
})
export class CentralsNewComponent implements OnInit {

  formCentral: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  crearFormulario(){
  this.formCentral = this.formBuilder.group({
      id: ['',[Validators.required, Validators.minLength(3)]],
      name: ['',Validators.required],
      localitat: ['',Validators.required],
      energia: ['',Validators.required],
    });
  }

  get idValid(){
    const control = this.formCentral.get('id');
  if (!control.touched){ return null;}
  else{
    return control.valid
  }
  }

  get nameValid(){
    return this.formCentral.get('name');
  }

  get localitatValid(){
    return this.formCentral.get('localitat');
  }

  get energiaValid(){
    return this.formCentral.get('energia');
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

}
