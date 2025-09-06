import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidade } from './listar-cidade/listar-cidade';
import { CidadeService } from './services/cidade';
import { InserirCidade } from './inserir-cidade/inserir-cidade';
import { EditarCidade } from './editar-cidade/editar-cidade';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarCidade, InserirCidade, EditarCidade],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CidadeService],
})
export class CidadeModule {}
