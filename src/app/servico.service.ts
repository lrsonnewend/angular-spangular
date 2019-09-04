import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
@Injectable()
export class ServicoService {
  public lista: Aluno[] = [];
  constructor() { }
  add(aluno: Aluno): void {
    this.lista.push(aluno);
  }
  remove(aluno: Aluno): void {
    // procura o objeto aluno na lista
    let indice = this.lista.indexOf(aluno, 0);
    if (indice > -1) {
      this.lista.splice(indice, 1);
    }
  }
}