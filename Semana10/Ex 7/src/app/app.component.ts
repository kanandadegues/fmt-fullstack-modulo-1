import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tarefas: string[] = [];
  entradaTarefas = "";

  adicionarTarefa() {
    if (this.entradaTarefas) this.tarefas.push(this.entradaTarefas);
    this.entradaTarefas = "";
  }
}
