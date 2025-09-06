import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from '../../shared/models/endereco.model';
import { EnderecoService } from '../services/endereco';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-endereco',
  standalone: false,
  templateUrl: './editar-endereco.html',
  styleUrl: './editar-endereco.css',
})
export class EditarEndereco implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco: Endereco = new Endereco();
  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined) this.endereco = res;
    else throw new Error('Endereço não encontrado');
  }

  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
