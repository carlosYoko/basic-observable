import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;


  constructor(private personasService: PersonasService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      empresa: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
    })
  }

  onSubmit() {
    this.personasService.agregarPersona(this.formulario.value)
  }
}
