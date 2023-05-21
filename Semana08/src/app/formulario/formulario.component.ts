import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nome = "";
  constructor() {}

  ngOnInit(): void{
    this.getNome();
  }

  getNome(){

  }
}
