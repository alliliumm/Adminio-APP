import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-cond',
  templateUrl: './cadastro-cond.page.html',
  styleUrls: ['./cadastro-cond.page.scss'],
})
export class CadastroCondPage implements OnInit {

  nomecond: string = "";
  rua: string = "";
  bairro: string="";
  numero: string = "";
  complemento: string = "";
  telefone: string  = "";
  email: string = "";
  condominioo_id: string  = "";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{

      this.condominioo_id = data.condominioo_id;
      this.nomecond = data.nomecond;
      this.rua = data.rua;
      this.bairro = data.bairro;
      this.numero = data.numero;
      this.complemento = data.complemento;
      this.telefone = data.telefone;
      this.email = data.email;
      

    });
  }
  
  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 3000
    });
    toast.present();
  }
  

  login(){
    this.router.navigate(['/logins']);
  }

  cadastrosin(){
    this.router.navigate(['/cadastro-sin']);
  }

  
  async cadastrarcon(){

    if(this.nomecond == "" || this.rua == "" || this.bairro == "" || this.numero == "" || this.telefone == ""){
      const toast = await this.toastController.create({
        message: 'Preencha todos os campos!',
        duration: 3000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }else{

    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'addcond',
        nomecond : this.nomecond, 
        rua : this.rua,
        bairro : this.bairro,
        numero : this.numero,
        complemento : this.complemento,
        telefone : this.telefone,
        email : this.email
        };
  
        this.provider.dadosApi(dados, 'api_cadastro.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          if(data['success']){
            this.mensagemSalvar();
          }
        });
        this.cadastrosin();
    });

    }
  }
  
  editarcon(){
  
  }
  


  /*
  userpag(){
    this.router.navigate(['/usuarios']);
  }*/
  
  
  /*
  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        nome : this.nome, 
        rua : this.rua,
        bairro : this.bairro,
        numero : this.senha_crip,
        complemento : this.complemento,
        telefone : this.telefone,
        email : this.email, 
        condominioo_id : this.condominioo_id
        };
  
        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
          this.router.navigate(['/usuarios']);
          this.mensagemSalvar();
        });
        this.userpag()
    });
  }*/
  

}
