import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaService } from './services/pessoa';
import { ListarPessoa } from './listar-pessoa/listar-pessoa';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPessoa } from './inserir-pessoa/inserir-pessoa';
import { EditarPessoa } from './editar-pessoa/editar-pessoa';

@NgModule({
  declarations: [ListarPessoa, InserirPessoa, EditarPessoa],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [PessoaService],
})
export class PessoaModule {}
