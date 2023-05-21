import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  usuario: { nome: string; CPF: string; diaAniversario: number; senha: string; } = {
    nome: "",
    CPF: "",
    diaAniversario: 1,
    senha: "",
  };
  
  constructor() {}

  ngOnInit(): void {}

  cadastrar() {
    window.alert(`Cadastro do usuário: ${this.usuario.nome}, de CPF: ${this.usuario.CPF}, do Dia de Nascimento: ${this.usuario.diaAniversario} e Senha: ${this.usuario.senha} está completo!`)
  };
}
