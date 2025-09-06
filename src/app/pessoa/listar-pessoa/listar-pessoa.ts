import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa';
import { Pessoa } from '../../shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  standalone: false,
  templateUrl: './listar-pessoa.html',
  styleUrl: './listar-pessoa.css',
})
export class ListarPessoa implements OnInit {
  pessoas: Pessoa[] = [];
  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }
}
