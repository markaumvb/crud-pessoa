import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoa } from './pessoa/listar-pessoa/listar-pessoa';
import { InserirPessoa } from './pessoa/inserir-pessoa/inserir-pessoa';
import { EditarPessoa } from './pessoa/editar-pessoa/editar-pessoa';
import { ListarCidade } from './cidade/listar-cidade/listar-cidade';
import { InserirCidade } from './cidade/inserir-cidade/inserir-cidade';
import { EditarCidade } from './cidade/editar-cidade/editar-cidade';
import { ListarEstado } from './estado/listar-estado/listar-estado';
import { CriarEstado } from './estado/criar-estado/criar-estado';
import { EditarEstado } from './estado/editar-estado/editar-estado';
import { ListarEndereco } from './endereco/listar-endereco/listar-endereco';
import { InserirEndereco } from './endereco/inserir-endereco/inserir-endereco';
import { EditarEndereco } from './endereco/editar-endereco/editar-endereco';

const routes: Routes = [
  // { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoa },
  { path: 'pessoas/novo', component: InserirPessoa },
  { path: 'pessoas/novo/:id', component: EditarPessoa },

  { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidade },
  { path: 'cidades/novo', component: InserirCidade },
  { path: 'cidades/novo/:id', component: EditarCidade },

  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  { path: 'enderecos/listar', component: ListarEndereco },
  { path: 'enderecos/novo', component: InserirEndereco },
  { path: 'enderecos/novo/:id', component: EditarEndereco },

  { path: 'estados', redirectTo: 'estados/listar' },
  { path: 'estados/listar', component: ListarEstado },
  { path: 'estados/novo', component: CriarEstado },
  { path: 'estados/novo/:id', component: EditarEstado },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
