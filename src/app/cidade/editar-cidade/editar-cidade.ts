import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../services/cidade';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cidade',
  standalone: false,
  templateUrl: './editar-cidade.html',
  styleUrl: './editar-cidade.css',
})
export class EditarCidade {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade: Cidade = new Cidade();
  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.cidadeService.buscarPorId(id);
    if (res !== undefined) this.cidade = res;
    else throw new Error('Cidade não encontrada');
  }

  atualizar(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
