import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstado } from './listar-estado/listar-estado';
import { EditarEstado } from './editar-estado/editar-estado';
import { CriarEstado } from './criar-estado/criar-estado';
import { EstadoService } from './services/estado';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarEstado, EditarEstado, CriarEstado],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EstadoService],
})
export class EstadoModule {}
