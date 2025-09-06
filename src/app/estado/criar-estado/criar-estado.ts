import { Component, ViewChild } from '@angular/core';
import { EstadoService } from '../services/estado';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';

@Component({
  selector: 'app-criar-estado',
  standalone: false,
  templateUrl: './criar-estado.html',
  styleUrl: './criar-estado.css',
})
export class CriarEstado {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();
  constructor(private estadoService: EstadoService, private router: Router) {}

  inserir() {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(['/estados/listar']);
    }
  }
}
