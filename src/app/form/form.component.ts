import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Aluno } from '../aluno';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private aluno: Aluno;
  constructor(private servico: ServicoService) { }
  ngOnInit() {
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
  salvar() {
    this.servico.add(this.aluno);
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
}