import { Injectable } from '@angular/core';
import { usuario } from "../formulario-dois/formulario-dois.component"

@Injectable({
  providedIn: 'root'
})
export class FormularioDoisService {

  constructor() { }

  cadastro(usuario: any){
    let usuarios = new Array<usuario>();
    if(localStorage.getItem("usuarios")){
      usuarios = JSON.parse(localStorage.getItem("usuarios") as string)
    }
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}
