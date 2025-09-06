import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa';

@Component({
  selector: 'app-inserir-pessoa',
  standalone: false,
  templateUrl: './inserir-pessoa.html',
  styleUrl: './inserir-pessoa.css',
})
export class InserirPessoa {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaService, private router: Router) {}

  inserir() {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(['/pessoas/listar']);
    }
  }
}
