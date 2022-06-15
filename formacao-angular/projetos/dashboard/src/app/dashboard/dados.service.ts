import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  // Metodo que irá retornar o observable
  obterDados(): Observable<any> {
    // Criando o observable manualmente
    // Devemos instancia-lo e passa-lo como referencia do proprio para fazermos a manipulação
    // next é o comando do observable usado para notificar todos inscritos
    // Resumidamente falando ele instancia o observable e faz a execução do retorno dos dados para os inscritos
    // complete notifica que não há mais necessidade de escuta
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}

}
