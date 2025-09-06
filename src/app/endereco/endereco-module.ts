import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEndereco } from './inserir-endereco/inserir-endereco';
import { EditarEndereco } from './editar-endereco/editar-endereco';
import { ListarEndereco } from './listar-endereco/listar-endereco';
import { Endereco } from '../shared/models/endereco.model';
import { EnderecoService } from './services/endereco';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InserirEndereco, EditarEndereco, ListarEndereco],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EnderecoService],
})
export class EnderecoModule {}
