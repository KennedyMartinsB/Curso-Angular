export class Conversao{
    constructor(
        public moedaDe?: string,
        public moedaPara?: string,
        public valor?: number
        // O atributo "?" quer dizer que não é algo obrigatório
    ){}
}
