import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  standalone: false,
  templateUrl: './editar-pessoa.html',
  styleUrl: './editar-pessoa.css',
})
export class EditarPessoa implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();
  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.pessoaService.buscarPorId(id);
    if (res !== undefined) this.pessoa = res;
    else throw new Error('Pessoa não encontrada');
  }

  atualizar(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
