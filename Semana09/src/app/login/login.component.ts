import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService } from '../shared/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginFormModel: { nome: string; senha: string; confirmaSenha: string; } = {
      nome: "",
      senha: "",
      confirmaSenha: "",
  };

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.criarForm();
  }

    criarForm(){
      this.loginFormModel = {
        nome: "",
        senha: "",
        confirmaSenha: "",
      }
    }

    login(){
            
      if (!this.mesmaSenha()){
        window.alert('Senhas não compatíveis')
        return;
      } 
      
      if (!this.senhaValida()){
        window.alert('Senha inválida')
        return;
      }
        
      const usuario: any = {nome: this.loginFormModel.nome, senha: this.loginFormModel.senha}

      this.loginFormModel.nome = "";
      this.loginFormModel.senha = "";
      this.loginFormModel.confirmaSenha = "";
      
      this.criarForm();

      if (this.localStorageService.registroUsuario(usuario))
          this.router.navigate(["/home"])
    }

    mesmaSenha() {
      return this.loginFormModel.senha === this.loginFormModel.confirmaSenha
    };

    senhaValida(){
      const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    return this.loginFormModel.senha.match(regex);
    }
  }
