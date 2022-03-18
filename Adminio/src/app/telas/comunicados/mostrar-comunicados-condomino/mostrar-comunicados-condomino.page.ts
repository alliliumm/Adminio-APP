import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-mostrar-comunicados-condomino',
  templateUrl: './mostrar-comunicados-condomino.page.html',
  styleUrls: ['./mostrar-comunicados-condomino.page.scss'],
})
export class MostrarComunicadosCondominoPage implements OnInit {
  comunicados: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  comunicados_sindico_id: string="";
  comunicado_id : string ="";
  cont_sinalizacoes : number;
  data_enviado : string ="";
  hora_enviado : string ="";


  sinal: string="";


  
  condomino: string = "";
  senha: string = "";

  condominos: any = [];

  condomino_id: string = "";
  condnome: string = "";

  condomino_fk: number = 0;



constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController,private storage: NativeStorage) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.comunicado_id = data.comunicado_id;
      this.assunto = data.assunto;
      this.conteudo = data.conteudo;
      this.status = data.status;
      this.comunicados_sindico_id = data.comunicados_sindico_id;
      this.data_enviado = data.data_enviado;
      this.hora_enviado = data.hora_enviado;
      this.cont_sinalizacoes = data.cont_sinalizacoes;
      
    });

    return new Promise(resolve=> {
      let dados = {
        requisicao :'listarcondomino'
      };
      this.provider.dadosApi(dados,'api_listar.php').subscribe(data => {
         console.log(data);
        this.condominos= data;
      });
    });
  }


  segmentChanged(condominos:any){
    this.condomino_fk = condominos.detail.value;
    console.log(condominos);
  }

  segmentChangedd(sinal:any){
    this.sinal = sinal.detail.value;
    console.log(sinal);
  }


  pautlist(){
    this.router.navigate(['/comunicados-home-condomino']);
  }

  async votecom(comunicado_id){


    return new Promise(resolve => {

      let dados = {
        requisicao : 'consultcondpaut',
        votacao_condomino_id : this.condomino_fk,
        senha: this.senha
  
      };
  
        this.provider.dadosApi(dados, 'api_user.php').subscribe(async data => {
          if(data['consultpagepautcond']) {
            this.storage.setItem('session_storage', data['result']);
            this.condomino = "";
            this.senha = "";
            console.log(data);

            if(this.sinal == ""){
              const toast = await this.toastController.create({
                message: 'Sinalize!',
                duration: 3000,
                color: 'warning'
              });
              toast.present();
              return;

            }else{ 
        
              return new Promise(resolve => {
                let dados = {
                  requisicao : 'sinalizacao',
                  sinal : this.sinal,
                  comunicado_id : comunicado_id
                
                };
        
    
                this.provider.dadosApi(dados, 'api_user.php').subscribe(async data => {
                  if(data['success']) {
                    this.storage.setItem('session_storage', data['result']);
                    this.mensagemSalvar();
                    console.log(data);
                  }
                });
                this.router.navigate(['/comunicados-home-condomino']);
              });
            }


          }else{
            const toast = await this.toastController.create({
              message: 'Dados incorretos, verifique se o email e senha estão corretos e analise os campos!',
              duration: 2000,
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
      duration: 1000
    });
    toast.present();
  }



}
