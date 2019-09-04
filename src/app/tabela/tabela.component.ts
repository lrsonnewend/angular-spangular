import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Aluno } from '../aluno';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(private s: ServicoService) { }
  ngOnInit() { }
  
  excluir(aluno: Aluno) {
    this.s.remove(aluno);
    return false; /* para evitar o popup menu */
  }
}