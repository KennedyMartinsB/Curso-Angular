import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';
@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {


  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }


  //Esta função é chamada pelo angular apos a criação do constructor
  ngOnInit(): void {
    //Associando o listar todos ao atributo tarefas
    this.tarefas = this.listarTodos();

    //Dados estaticos pra teste da listagem
    // this.tarefas = [
    //   new Tarefa(1, "Lavar louça", false),
    //   new Tarefa(2, "Arrumar quarto", true)
    // ]
  }

  //Retorna uma lista de tarefas, metodo de listagem é chamado na service
  //Componente não controla a regra de negócio, ele só controla a n
  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

}
