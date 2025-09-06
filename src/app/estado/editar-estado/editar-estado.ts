import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../services/estado';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-estado',
  standalone: false,
  templateUrl: './editar-estado.html',
  styleUrl: './editar-estado.css',
})
export class EditarEstado {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();
  constructor(
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.estadoService.buscarPorId(id);
    if (res !== undefined) this.estado = res;
    else throw new Error('Estado não encontrada');
  }

  atualizar(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
