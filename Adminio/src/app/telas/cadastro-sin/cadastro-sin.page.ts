import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-cadastro-sin',
  templateUrl: './cadastro-sin.page.html',
  styleUrls: ['./cadastro-sin.page.scss'],
})
export class CadastroSinPage implements OnInit {

  nome: string = "";
  tipo_sindico: string="";
  email_sin: string = "";
  senha_sin: string = "";
  sindico_id: string  = "";
  
  condominioo : any = [];

  nomecond: string = "";
  condominioo_id: string  = "";

  condominioo_fk: number = 0;



  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.sindico_id = data.sindico_id;
      this.nome = data.nome;
      this.email_sin = data.email_sin;
      this.senha_sin = data.senha_sin;

      this.condominioo_id = data.condominioo_id;
      this.nomecond = data.nomecond;

      

    });

    return new Promise(resolve=> {
      let dados = {
        requisicao :'listarcond'
      };
      this.provider.dadosApi(dados,'api_listar.php').subscribe(data => {
         console.log(data);
        this.condominioo= data;
      });
    });
}



async mensagemSalvar() {
  const toast = await this.toastController.create({
    message: 'Salvo com Sucesso!!',
    duration: 3000,
    color: 'success'
  });
  toast.present();
}



login(){
  this.router.navigate(['/logins']);
}

cadastrocond(){
  this.router.navigate(['/cadastro-cond']);
}

userpag(){
  this.router.navigate(['/usuarios']);
}

segmentChanged(condominioo:any){
  this.condominioo_fk = condominioo.detail.value;
  console.log(condominioo)
}


async cadastrarsin(){

  if(this.nome == "" || this.tipo_sindico == "" || this.condominioo_fk == 0 || this.email_sin == "" || this.senha_sin == ""){
    const toast = await this.toastController.create({
      message: 'Preencha todos os Campos!',
      duration: 3000,
      color: 'warning'
    });
    toast.present();
    return;
  }else{
    return new Promise(resolve => {
    
      let dados = {
        requisicao : 'addsin',
        nome : this.nome, 
        tipo_sindico : this.tipo_sindico,
        sindico_condominioo_id : this.condominioo_fk,
        email_sin : this.email_sin,
        senha_sin : this.senha_sin
      };
  
        this.provider.dadosApi(dados, 'api_cadastro.php').subscribe(data => {
          console.log(data);
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.login()
    });

  }

}

editarsin(){

}

/*
editarsin(){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'editarsin',
      nome : this.nome, 
      tipo_sindico : this.tipo_sindico,
      condominio_select : this.condominio_select,
      email_sin : this.email_sin,
      senha_sin : this.senha_sin,
      senha_crip : this.senha_crip,
      sindico_id : this.sindico_id
      };

      this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.mensagemSalvar();
      });
      this.userpag()
  });
}
*/

}
