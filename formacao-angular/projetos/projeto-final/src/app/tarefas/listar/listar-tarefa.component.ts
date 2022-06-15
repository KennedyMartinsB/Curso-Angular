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

  //Recebe um evento e uma tarefa
  // O evento é um objeto padrão que representa um evento do navegador
  // Nesse caso ele está sendo usado para remover o comportamento do botão de excluir que estava dando reload na pagina a cada ação
  remover($event: any, tarefa: Tarefa): void {
    // Desativando o reload da pagina
    $event.preventDefault();
    // Confirm é um utilitario do navegador que exibe um alerta de confirmação pra ação desejada
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      // Como chamamos o listar todos no ngOnInit podemos chama-lo dessa forma
      this.tarefas = this.listarTodos();
      // this.tarefas = this.tarefaService.listarTodos();
    }
  }


  alterarStatus(tarefa: Tarefa): void {
    // Confirmação de mudança de status
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      // Chamando o serviço de mudança de status
      this.tarefaService.alterarStatus(tarefa.id);
      console.log("Tarefa atualizada com sucesso!!!");
      this.tarefas = this.listarTodos();
    }
  }

}
