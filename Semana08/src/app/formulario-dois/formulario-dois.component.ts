import { Component } from '@angular/core';
import { FormularioDoisService } from '../services/formulario-dois.service';

@Component({
  selector: 'formulario-dois',
  templateUrl: './formulario-dois.component.html',
  styleUrls: ['./formulario-dois.component.scss']
})

export class FormularioDoisComponent {
  email = "";
  senha = "";

  constructor(private formularioDoisService: FormularioDoisService) {}

  cadastroUsuario() {
    const usuario = {
      email: this.email,
      senha: this.senha,
    };

    this.formularioDoisService.cadastro(usuario);

    this.email = this.senha = "";
    
}
}

export type usuario = {
  email: string;
  password: string;
};