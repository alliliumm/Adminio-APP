import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-editar-user-sindico',
  templateUrl: './editar-user-sindico.page.html',
  styleUrls: ['./editar-user-sindico.page.scss'],
})
export class EditarUserSindicoPage implements OnInit {
  nome: string = "";
  tipo_sindico: string="";
  email_sin: string = "";
  senha_sin: string = "";
  sindico_id: string  = "";
  
  email : string= "";

  condominioo : any = [];

  nomecond: string = "";
  condominioo_id: string  = "";

  condominioo_fk: number = 0;


  sindico: string = "";
  senha: string = "";

  sindicos: any = [];

  sindico_fk: number = 0;


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, private storage: NativeStorage) { }

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


editarsin(sindico_id){

  return new Promise(resolve =>{
      
    let dados = {
      email : this.email, 
      senha : this.senha,
      requisicao : 'login',
    };

    this.provider.dadosApi(dados,'api_login.php').subscribe(async data => {
      var alert = data['msg'];
        if(data['pageadm']){
          this.storage.setItem('session_storage', data['result']);
          this.sindico = "";
          this.senha = "";
          console.log(data);

          return new Promise(resolve => {
    
            let dados = {
              requisicao : 'editarsindico',
              nome : this.nome, 
              tipo_sindico : this.tipo_sindico,
              sindico_condominioo_id : this.condominioo_fk,
              email_sin : this.email_sin,
              senha_sin : this.senha_sin,
              sindico_id : sindico_id
            };
        
              this.provider.dadosApi(dados, 'api_cadastro.php').subscribe(data => {
                console.log(data);
                this.router.navigate(['/usuarios-home-sindico']);
                this.mensagemSalvar();
              });
          });

        }else{
          const toast = await this.toastController.create({
            message: alert,
            duration: 3000,
            color: 'danger'
          });
          toast.present();
          console.log(data)
        }
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
  this.router.navigate(['/usuarios-home-sindico']);
}


segmentChanged(condominioo:any){
  this.condominioo_fk = condominioo.detail.value;
  console.log(condominioo)
}





}
