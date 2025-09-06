import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../shared/models/endereco.model';
import { EnderecoService } from '../services/endereco';

@Component({
  selector: 'app-listar-endereco',
  standalone: false,
  templateUrl: './listar-endereco.html',
  styleUrl: './listar-endereco.css',
})
export class ListarEndereco implements OnInit {
  enderecos: Endereco[] = [];
  constructor(private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o endereço ${endereco.rua}?`)) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
