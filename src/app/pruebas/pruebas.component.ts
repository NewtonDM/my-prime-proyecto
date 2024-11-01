import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaterialModule } from '../module/material.module';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  templateUrl: './pruebas.component.html',
  imports: [MaterialModule],
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {
  @Input() nameData: string = '';
  @Output() formSubmitted = new EventEmitter<string>();
  pruebasForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.pruebasForm = this.fb.group({
      name: [this.nameData]
    })
  }

  onSubmit() {
    this.formSubmitted.emit(this.pruebasForm.value.name)
    console.log('Se emitio el vlaor al padre');
  }
}
