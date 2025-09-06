import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services/cidade';
import { Cidade } from '../../shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  standalone: false,
  templateUrl: './listar-cidade.html',
  styleUrl: './listar-cidade.css',
})
export class ListarCidade implements OnInit {
  cidades: Cidade[] = [];
  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }
  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }
}
