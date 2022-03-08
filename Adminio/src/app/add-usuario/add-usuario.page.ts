import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  
  valuesSelectes: string = "1";
  nome: string = "";
  bloco: string="";
  apartamento: number;
  usuario: string = "";
  senha: string = "";
  morador_id: string = "";
  senha_crip: string  = "";
  administradora: string  = "";
  condominio: string  = "";
  id: string  = "";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.morador_id = data.morador_id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.senha_crip = data.senha_crip;
      this.apartamento = data.apartamento;
      this.bloco = data.bloco;
      this.administradora = data.administradora;
      this.condominio = data.condominio

    });
  }

  segmentChanged(event: CustomEvent){
    this.valuesSelectes = event.detail.value;
    console.log(this.valuesSelectes);
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }

  login(){
    this.router.navigate(['/logins']);
  }

  cadastrar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'add',
        nome : this.nome, 
        usuario : this.usuario,
        senha : this.senha,
        senha_crip : this.senha_crip,
        apartamento : this.apartamento,
        bloco : this.bloco
        };

        this.provider.dadosApi(dados, 'api_user.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.login()
    });

  }

  cadastrarsin(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'addsin',
        nome : this.nome, 
        usuario : this.usuario,
        senha : this.senha,
        senha_crip : this.senha_crip,
        administradora : this.administradora,
        condominio : this.condominio
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.login()
    });

  }

  userpag(){
    this.router.navigate(['/usuarios']);
  }


  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        nome : this.nome, 
        usuario : this.usuario, 
        senha : this.senha,
        senha_crip : this.senha_crip,
        apartamento : this.apartamento, 
        bloco : this.bloco, 
        morador_id : this.morador_id
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.userpag()
    });
  }

  editarsin(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editarsin',
        nome : this.nome, 
        usuario : this.usuario, 
        senha : this.senha,
        senha_crip : this.senha_crip,
        administradora : this.administradora, 
        condominio : this.condominio, 
        id : this.id
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.userpag()
    });
  }



  

}
