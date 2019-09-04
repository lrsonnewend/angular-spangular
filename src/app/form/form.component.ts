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
  constructor(private s: ServicoService) { }
  ngOnInit() {
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
  salvar() {
    this.s.add(this.aluno);
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
}