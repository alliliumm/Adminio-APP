import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logins',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario/:morador_id/:nome/:usuario/:senha/:apartamento/:bloco',
      loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'logins',
    loadChildren: () => import('./telas/logins/logins.module').then( m => m.LoginsPageModule)
  },
  {
    path: 'home-sindico',
    loadChildren: () => import('./telas/home-sindico/home-sindico.module').then( m => m.HomeSindicoPageModule)
  },
  {
    path: 'home-condomino',
    loadChildren: () => import('./telas/home-condomino/home-condomino.module').then( m => m.HomeCondominoPageModule)
  },
  {
    path: 'mostrar-pautas-sindico',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-sindico/mostrar-pautas-sindico.module').then( m => m.MostrarPautasSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-condomino',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-condomino/mostrar-pautas-condomino.module').then( m => m.MostrarPautasCondominoPageModule)
  },
  {
    path: 'mostrar-pautas-condomino/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-condomino/mostrar-pautas-condomino.module').then( m => m.MostrarPautasCondominoPageModule)
  },
  {
    path: 'mostrar-pautas-sindico/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-sindico/mostrar-pautas-sindico.module').then( m => m.MostrarPautasSindicoPageModule)
  },
  {
    path: 'pautas-home-sindico',
    loadChildren: () => import('./telas/pautas/pautas-home-sindico/pautas-home-sindico.module').then( m => m.PautasHomeSindicoPageModule)
  },
  {
    path: 'pautas-home-condomino',
    loadChildren: () => import('./telas/pautas/pautas-home-condomino/pautas-home-condomino.module').then( m => m.PautasHomeCondominoPageModule)
  },
  {
    path: 'criacao-pautas-sindico',
    loadChildren: () => import('./telas/pautas/criacao-pautas-sindico/criacao-pautas-sindico.module').then( m => m.CriacaoPautasSindicoPageModule)
  },
  {
    path: 'edicao-pautas-sindico',
    loadChildren: () => import('./telas/pautas/edicao-pautas-sindico/edicao-pautas-sindico.module').then( m => m.EdicaoPautasSindicoPageModule)
  },
  {
    path: 'edicao-pautas-sindico/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/edicao-pautas-sindico/edicao-pautas-sindico.module').then( m => m.EdicaoPautasSindicoPageModule)
  },
  {
    path: 'edicao-status-sindico',
    loadChildren: () => import('./telas/pautas/edicao-status-sindico/edicao-status-sindico.module').then( m => m.EdicaoStatusSindicoPageModule)
  },
  {
    path: 'edicao-status-sindico/:pauta_id/:assunto/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/edicao-status-sindico/edicao-status-sindico.module').then( m => m.EdicaoStatusSindicoPageModule)
  },
  {
    path: 'resultados-sindico',
    loadChildren: () => import('./telas/pautas/resultados-sindico/resultados-sindico.module').then( m => m.ResultadosSindicoPageModule)
  },
  {
    path: 'resultados-condomino',
    loadChildren: () => import('./telas/pautas/resultados-condomino/resultados-condomino.module').then( m => m.ResultadosCondominoPageModule)
  },
  {
    path: 'pautas-fechadas-home-sindico',
    loadChildren: () => import('./telas/pautas/pautas-fechadas-home-sindico/pautas-fechadas-home-sindico.module').then( m => m.PautasFechadasHomeSindicoPageModule)
  },
  {
    path: 'pautas-fechadas-home-condomino',
    loadChildren: () => import('./telas/pautas/pautas-fechadas-home-condomino/pautas-fechadas-home-condomino.module').then( m => m.PautasFechadasHomeCondominoPageModule)
  },
  {
    path: 'mostrar-pautas-fechadas-sindico',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-fechadas-sindico/mostrar-pautas-fechadas-sindico.module').then( m => m.MostrarPautasFechadasSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-fechadas-condomino',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-fechadas-condomino/mostrar-pautas-fechadas-condomino.module').then( m => m.MostrarPautasFechadasCondominoPageModule)
  },
  {
    path: 'pautas-avaliacao-condomino',
    loadChildren: () => import('./telas/pautas/pautas-avaliacao-condomino/pautas-avaliacao-condomino.module').then( m => m.PautasAvaliacaoCondominoPageModule)
  },
  {
    path: 'pautas-avaliacao-sindico',
    loadChildren: () => import('./telas/pautas/pautas-avaliacao-sindico/pautas-avaliacao-sindico.module').then( m => m.PautasAvaliacaoSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-avaliacao-sindico',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-avaliacao-sindico/mostrar-pautas-avaliacao-sindico.module').then( m => m.MostrarPautasAvaliacaoSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-avaliacao-sindico/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-avaliacao-sindico/mostrar-pautas-avaliacao-sindico.module').then( m => m.MostrarPautasAvaliacaoSindicoPageModule)
  },
  {
    path: 'edicao-status-resultado-sindico',
    loadChildren: () => import('./telas/pautas/edicao-status-resultado-sindico/edicao-status-resultado-sindico.module').then( m => m.EdicaoStatusResultadoSindicoPageModule)
  },
  {
    path: 'edicao-status-resultado-sindico/:pauta_id/:assunto/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/edicao-status-resultado-sindico/edicao-status-resultado-sindico.module').then( m => m.EdicaoStatusResultadoSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-fechadas-sindico/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-fechadas-sindico/mostrar-pautas-fechadas-sindico.module').then( m => m.MostrarPautasFechadasSindicoPageModule)
  },
  {
    path: 'mostrar-pautas-fechadas-condomino/:pauta_id/:assunto/:conteudo/:status/:pautas_sindico_id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-fechadas-condomino/mostrar-pautas-fechadas-condomino.module').then( m => m.MostrarPautasFechadasCondominoPageModule)
  },
  {
    path: 'cadastro-cond',
    loadChildren: () => import('./telas/usuarios/cadastro-cond/cadastro-cond.module').then( m => m.CadastroCondPageModule)
  },
  {
    path: 'cadastro-sin',
    loadChildren: () => import('./telas/usuarios/cadastro-sin/cadastro-sin.module').then( m => m.CadastroSinPageModule)
  },
  {
    path: 'cadastro-condomino',
    loadChildren: () => import('./telas/usuarios/cadastro-condomino/cadastro-condomino.module').then( m => m.CadastroCondominoPageModule)
  },
  {
    path: 'criacao-comunicados-sindico',
    loadChildren: () => import('./telas/comunicados/criacao-comunicados-sindico/criacao-comunicados-sindico.module').then( m => m.CriacaoComunicadosSindicoPageModule)
  },
  {
    path: 'comunicados-home-sindico',
    loadChildren: () => import('./telas/comunicados/comunicados-home-sindico/comunicados-home-sindico.module').then( m => m.ComunicadosHomeSindicoPageModule)
  },
  {
    path: 'usuarios-home-sindico',
    loadChildren: () => import('./telas/usuarios/usuarios-home-sindico/usuarios-home-sindico.module').then( m => m.UsuariosHomeSindicoPageModule)
  },
  {
    path: 'comunicados-fechadas-home-sindico',
    loadChildren: () => import('./telas/comunicados/comunicados-fechadas-home-sindico/comunicados-fechadas-home-sindico.module').then( m => m.ComunicadosFechadasHomeSindicoPageModule)
  },
  {
    path: 'edicao-status-comunicados-sindico',
    loadChildren: () => import('./telas/comunicados/edicao-status-comunicados-sindico/edicao-status-comunicados-sindico.module').then( m => m.EdicaoStatusComunicadosSindicoPageModule)
  },
  {
    path: 'edicao-status-comunicados-sindico/:comunicado_id/:assunto/:status/:comunicados_sindico_id',
    loadChildren: () => import('./telas/comunicados/edicao-status-comunicados-sindico/edicao-status-comunicados-sindico.module').then( m => m.EdicaoStatusComunicadosSindicoPageModule)
  },
  {
    path: 'edicao-comunicados-sindico',
    loadChildren: () => import('./telas/comunicados/edicao-comunicados-sindico/edicao-comunicados-sindico.module').then( m => m.EdicaoComunicadosSindicoPageModule)
  },
  {
    path: 'edicao-comunicados-sindico/:comunicado_id/:assunto/:conteudo/:status/:comunicados_sindico_id',
    loadChildren: () => import('./telas/comunicados/edicao-comunicados-sindico/edicao-comunicados-sindico.module').then( m => m.EdicaoComunicadosSindicoPageModule)
  },
  {
    path: 'comunicados-home-condomino',
    loadChildren: () => import('./telas/comunicados/comunicados-home-condomino/comunicados-home-condomino.module').then( m => m.ComunicadosHomeCondominoPageModule)
  },
  {
    path: 'comunicados-fechadas-home-condomino',
    loadChildren: () => import('./telas/comunicados/comunicados-fechadas-home-condomino/comunicados-fechadas-home-condomino.module').then( m => m.ComunicadosFechadasHomeCondominoPageModule)
  },
  {
    path: 'mostrar-comunicados-sindico',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-sindico/mostrar-comunicados-sindico.module').then( m => m.MostrarComunicadosSindicoPageModule)
  },
  {
    path: 'mostrar-comunicados-sindico/:comunicado_id/:assunto/:conteudo/:status/:comunicados_sindico_id/:data_enviado/:hora_enviado/:cont_sinalizacoes',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-sindico/mostrar-comunicados-sindico.module').then( m => m.MostrarComunicadosSindicoPageModule)
  },
  {
    path: 'mostrar-comunicados-condomino',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-condomino/mostrar-comunicados-condomino.module').then( m => m.MostrarComunicadosCondominoPageModule)
  },
  {
    path: 'mostrar-comunicados-condomino/:comunicado_id/:assunto/:conteudo/:status/:comunicados_sindico_id/:data_enviado/:hora_enviado/:cont_sinalizacoes',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-condomino/mostrar-comunicados-condomino.module').then( m => m.MostrarComunicadosCondominoPageModule)
  },
  {
    path: 'mostrar-comunicados-fechadas-sindico',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-fechadas-sindico/mostrar-comunicados-fechadas-sindico.module').then( m => m.MostrarComunicadosFechadasSindicoPageModule)
  },
  {
    path: 'mostrar-comunicados-fechadas-sindico/:comunicado_id/:assunto/:conteudo/:status/:comunicados_sindico_id/:data_enviado/:hora_enviado/:cont_sinalizacoes',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-fechadas-sindico/mostrar-comunicados-fechadas-sindico.module').then( m => m.MostrarComunicadosFechadasSindicoPageModule)
  },
  {
    path: 'mostrar-comunicados-fechadas-condomino',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-fechadas-condomino/mostrar-comunicados-fechadas-condomino.module').then( m => m.MostrarComunicadosFechadasCondominoPageModule)
  },
  {
    path: 'mostrar-comunicados-fechadas-condomino/:comunicado_id/:assunto/:conteudo/:status/:comunicados_sindico_id/:data_enviado/:hora_enviado/:cont_sinalizacoes',
    loadChildren: () => import('./telas/comunicados/mostrar-comunicados-fechadas-condomino/mostrar-comunicados-fechadas-condomino.module').then( m => m.MostrarComunicadosFechadasCondominoPageModule)
  },
  {
    path: 'usuario-home-list-condomino',
    loadChildren: () => import('./telas/usuarios/usuario-home-list-condomino/usuario-home-list-condomino.module').then( m => m.UsuarioHomeListCondominoPageModule)
  },
  {
    path: 'mostrar-user-sindico',
    loadChildren: () => import('./telas/usuarios/mostrar-user-sindico/mostrar-user-sindico.module').then( m => m.MostrarUserSindicoPageModule)
  },
  {
    path: 'mostrar-user-sindico/:sindico_id/:nome/:tipo_sindico/:sindico_condominioo_id/:email_sin',
    loadChildren: () => import('./telas/usuarios/mostrar-user-sindico/mostrar-user-sindico.module').then( m => m.MostrarUserSindicoPageModule)
  },
  {
    path: 'mostrar-user-condomino',
    loadChildren: () => import('./telas/usuarios/mostrar-user-condomino/mostrar-user-condomino.module').then( m => m.MostrarUserCondominoPageModule)
  },
  {
    path: 'mostrar-user-condomino/:condomino_id/:condnome/:tipo_condomino/:condominos_condominioo_id/:email_cond/:conjunto/:bloco/:andar/:apartamento',
    loadChildren: () => import('./telas/usuarios/mostrar-user-condomino/mostrar-user-condomino.module').then( m => m.MostrarUserCondominoPageModule)
  },
  {
    path: 'editar-user-condomino',
    loadChildren: () => import('./telas/usuarios/editar-user-condomino/editar-user-condomino.module').then( m => m.EditarUserCondominoPageModule)
  },
  {
    path: 'editar-user-condomino/:condomino_id/:condnome/:tipo_condomino/:condomino_condominioo_id/:email_cond/:conjunto/:bloco/:andar/:apartamento',
    loadChildren: () => import('./telas/usuarios/editar-user-condomino/editar-user-condomino.module').then( m => m.EditarUserCondominoPageModule)
  },
  {
    path: 'editar-user-sindico',
    loadChildren: () => import('./telas/usuarios/editar-user-sindico/editar-user-sindico.module').then( m => m.EditarUserSindicoPageModule)
  },
  {
    path: 'editar-user-sindico/:sindico_id/:nome/:tipo_sindico/:sindico_condominioo_id/:email_sin',
    loadChildren: () => import('./telas/usuarios/editar-user-sindico/editar-user-sindico.module').then( m => m.EditarUserSindicoPageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
