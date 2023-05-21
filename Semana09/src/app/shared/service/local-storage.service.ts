import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  registroUsuario(usuario: any){
    localStorage.setItem("usuarioLogado", JSON.stringify({usuario}))
    return true;
  }

  usuarioConectado(){
    if(localStorage.getItem("usuarioLogado")) {
      return true;
    }
    else {
      return false;
    }
  }
}
