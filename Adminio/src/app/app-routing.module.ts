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
  /*{
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },*/
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'mostrar-usuario/:morador_id/:nome/:usuario/:senha/:apartamento/:bloco',
      loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  /*{
    path: 'add-usuario/:morador_id/:nome/:usuario/:senha/:apartamento/:bloco',
      loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },*/
  {
    path: 'mostrar-pautas/:pauta_id/:assunto/:conteudo',
      loadChildren: () => import('./mostrar-pautas/mostrar-pautas.module').then( m => m.MostrarPautasPageModule)
  },
  {
    path: 'popupform',
    loadChildren: () => import('./popupform/popupform.module').then( m => m.PopupformPageModule)
  },
  {
    path: 'assembleia',
    loadChildren: () => import('./assembleia/assembleia.module').then( m => m.AssembleiaPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
  },  
  {
    path: 'usermsg',
    loadChildren: () => import('./usermsg/usermsg.module').then( m => m.UsermsgPageModule)
  },
  {
    path: 'mostrar-pautas',
    loadChildren: () => import('./mostrar-pautas/mostrar-pautas.module').then( m => m.MostrarPautasPageModule)
  },
  {
    path: 'resultpage',
    loadChildren: () => import('./resultpage/resultpage.module').then( m => m.ResultpagePageModule)
  },
  {
    path: 'logins',
    loadChildren: () => import('./telas/logins/logins.module').then( m => m.LoginsPageModule)
  },
  {
    path: 'cadastro-sin',
    loadChildren: () => import('./telas/cadastro-sin/cadastro-sin.module').then( m => m.CadastroSinPageModule)
  },
  {
    path: 'cadastro-condomino',
    loadChildren: () => import('./telas/cadastro-condomino/cadastro-condomino.module').then( m => m.CadastroCondominoPageModule)
  },
  {
    path: 'cadastro-cond',
    loadChildren: () => import('./telas/cadastro-cond/cadastro-cond.module').then( m => m.CadastroCondPageModule)
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
    path: 'mostrar-pautas-condomino/:pauta_id/:assunto/:conteudo/:status/:pautas-sindico-id',
    loadChildren: () => import('./telas/pautas/mostrar-pautas-condomino/mostrar-pautas-condomino.module').then( m => m.MostrarPautasCondominoPageModule)
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
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
