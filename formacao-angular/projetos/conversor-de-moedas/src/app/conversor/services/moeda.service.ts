import { Injectable } from '@angular/core';

import { Moeda } from '../model';

@Injectable()
export class MoedaService {

  // Lista de moedas que vai representar as siglas e descrições
  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { "sigla": "AUD", "descricao": "Dólar australiano" },
    { "sigla": "BGN", "descricao": "Lev búlgaro" },
    { "sigla": "BRL", "descricao": "Real brasileiro" },
    { "sigla": "CAD", "descricao": "Dólar canadense" },
    { "sigla": "CHF", "descricao": "Franco suíço" },
    { "sigla": "CNY", "descricao": "Yuan Chinês" },
    { "sigla": "CZK", "descricao": "Coroa República Tcheca" },
    { "sigla": "DKK", "descricao": "Coroa dinamarquesa" },
    { "sigla": "EUR", "descricao": "Euro" },
    { "sigla": "GBP", "descricao": "Libra Esterlina" },
    { "sigla": "HKD", "descricao": "Dólar de Hong Kong" },
    { "sigla": "HRK", "descricao": "Coroa Croácia" },
    { "sigla": "HUF", "descricao": "Florim húngaro" },
    { "sigla": "IDR", "descricao": "Rupia indonésia" },
    { "sigla": "ILS", "descricao": "Novo shekel israelense" },
    { "sigla": "INR", "descricao": "Rupia indiana" },
    { "sigla": "JPY", "descricao": "Iene japonês" },
    { "sigla": "KRW", "descricao": "Won sul-coreano" },
    { "sigla": "MXN", "descricao": "Peso mexicano" },
    { "sigla": "MYR", "descricao": "Malásia Ringgit" },
    { "sigla": "NOK", "descricao": "Coroa Noruega" },
    { "sigla": "NZD", "descricao": "Dólar da Nova Zelândia" },
    { "sigla": "PHP", "descricao": "Peso filipino" },
    { "sigla": "PLN", "descricao": "Złoty Polónia" },
    { "sigla": "RON", "descricao": "Leu romeno" },
    { "sigla": "RUB", "descricao": "Belarus Ruble" },
    { "sigla": "SEK", "descricao": "Coroa Suécia" },
    { "sigla": "SGD", "descricao": "Dólar de Singapura" },
    { "sigla": "THB", "descricao": "Baht Tailândia" },
    { "sigla": "TRY", "descricao": "Lira turca" },
    { "sigla": "USD", "descricao": "Dólar dos Estados Unidos" }, 
    { "sigla": "ZAR", "descricao": "Rand África do Sul" }
  ];

  // Converte os dados locais em uma listagem de moedas
  listarTodas(): Moeda[] {
    // Verificando se a moeda ja foi populada e a retornando
  	if (this.moedas) {
  		return this.moedas;
  	} 
  	
    //Se executado pela primeira vez ele inicializa este array abaixo
  	this.moedas = [];

    // Para cada objeto ele instancia uma nova moeda
  	for (let moedaObj of this.moedasObj) {
  		let moeda: Moeda = new Moeda();
      // Object.assign pega um objeto de origem no caso moeda que é uma instâncian vazia
      // Pega outra instância de objeto populada que no caso é moedasObj
      // O Object.assing vai copiar os dados do moedasObj para a moeda
  		Object.assign(moeda, moedaObj);
      // Push para adicionar a moeda populada para a listagem
  		this.moedas.push(moeda);
  	}

  	return this.moedas;
  } 
}
