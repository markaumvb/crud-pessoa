import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from '../../shared/models/endereco.model';
import { EnderecoService } from '../services/endereco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-endereco',
  standalone: false,
  templateUrl: './inserir-endereco.html',
  styleUrl: './inserir-endereco.css',
})
export class InserirEndereco {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco: Endereco = new Endereco();
  constructor(private enderecoService: EnderecoService, private router: Router) {}

  inserir() {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos/listar']);
    }
  }
}
