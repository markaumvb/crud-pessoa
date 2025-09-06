import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from '../../shared/models/cidade.model';
import { Router } from '@angular/router';
import { CidadeService } from '../services/cidade';

@Component({
  selector: 'app-inserir-cidade',
  standalone: false,
  templateUrl: './inserir-cidade.html',
  styleUrl: './inserir-cidade.css',
})
export class InserirCidade {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade: Cidade = new Cidade();
  constructor(private cidadeService: CidadeService, private router: Router) {}

  inserir() {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades/listar']);
    }
  }
}
