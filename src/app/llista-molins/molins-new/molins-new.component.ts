import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-molins-new',
  templateUrl: './molins-new.component.html',
})
export class MolinsNewComponent implements OnInit {

  formMoli: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  crearFormulario(){
  this.formMoli = this.formBuilder.group({
      id: ['',[Validators.required, Validators.minLength(3)]],
      name: ['',Validators.required],
      localitat: ['',Validators.required],
      energia: ['',Validators.required],
    });
  }

  get idValid(){
    const control = this.formMoli.get('id');
  if (!control.touched){ return null;}
  else{
    return control.valid
  }
  }

  get nameValid(){
    return this.formMoli.get('name');
  }

  get localitatValid(){
    return this.formMoli.get('localitat');
  }

  get energiaValid(){
    return this.formMoli.get('energia');
  }

  ngOnInit(): void {
    this.crearFormulario();
  }
}
