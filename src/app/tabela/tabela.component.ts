import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Aluno } from '../aluno';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(private servico: ServicoService) { }
  ngOnInit() { }
  excluir(aluno: Aluno) {
    this.servico.remove(aluno);
    return false; /* para evitar o popup menu */
  }
}