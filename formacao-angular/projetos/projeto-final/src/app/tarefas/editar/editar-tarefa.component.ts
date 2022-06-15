import { TarefaService, Tarefa } from './../shared';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
      ) { }

  ngOnInit() {
    // Obtendo o id e salvando em uma variavel
    // Atravez do route temos acesso ao objeto snapshot seguido de params que tem todos os parametro da url
    // o "+" é um operador do ts que faz a conversão do valor para number
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void{
    // Validando se o formulario é valido
    if(this.formTarefa.form.valid){
      // Chamando metodo atualizar
      this.tarefaService.atualizar(this.tarefa);
      alert("Tarefa Atualizada com sucesso!!!");
      // Redirecionando para tarefas
      this.router.navigate(['/tarefas']);
    }
  }


}
