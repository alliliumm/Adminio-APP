import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-editar-user-condomino',
  templateUrl: './editar-user-condomino.page.html',
  styleUrls: ['./editar-user-condomino.page.scss'],
})
export class EditarUserCondominoPage implements OnInit {
  condnome: string = "";
  tipo_condomino: string="";
  email_cond: string = "";
  senha_cond: string = "";
  condomino_id: string  = "";
  conjunto: string  = "";
  bloco: string  = "";
  andar: string  = "";
  apartamento: string  = "";
  


  condominioo : any = [];

  nomecond: string = "";
  condominioo_id: string  = "";

  condominioo_fk: number = 0;

  email : string= "";
  condomino: string = "";
  senha: string = "";

  condominos: any = [];

  sindico_fk: number = 0;


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, private storage: NativeStorage) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.condomino_id = data.condomino_id;
      this.condnome = data.condnome;
      this.tipo_condomino = data.tipo_condomino;
      this.conjunto = data.conjunto;
      this.bloco = data.bloco;
      this.andar = data.andar;
      this.apartamento = data.apartamento;
      this.email_cond = data.email_cond;
      this.senha_cond = data.senha_cond;

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


editarsin(condomino_id){

  return new Promise(resolve =>{
      
    let dados = {
      email : this.email, 
      senha : this.senha,
      requisicao : 'login',
    };

    this.provider.dadosApi(dados,'api_login.php').subscribe(async data => {
        if(data['pagemor']){
          this.storage.setItem('session_storage', data['result']);
          this.condomino = "";
          this.senha = "";
          console.log(data);

          return new Promise(resolve => {
    
            let dados = {
              requisicao : 'editarcondomino',
              condnome : this.condnome, 
              tipo_condomino : this.tipo_condomino,
              conjunto : this.conjunto,
              bloco : this.bloco,
              andar : this.andar,
              apartamento : this.apartamento,
              condominos_condominioo_id : this.condominioo_fk,
              email_cond : this.email_cond,
              senha_cond : this.senha_cond,
              condomino_id : condomino_id
            };
        
              this.provider.dadosApi(dados, 'api_cadastro.php').subscribe(data => {
                console.log(data);
                this.router.navigate(['/usuario-home-list-condomino']);
                this.mensagemSalvar();
              });
          });

        }else{
          const toast = await this.toastController.create({
            message: 'Dados Inváidos',
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
