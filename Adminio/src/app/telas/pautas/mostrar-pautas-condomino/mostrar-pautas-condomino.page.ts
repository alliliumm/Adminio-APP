import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-mostrar-pautas-condomino',
  templateUrl: './mostrar-pautas-condomino.page.html',
  styleUrls: ['./mostrar-pautas-condomino.page.scss'],
})
export class MostrarPautasCondominoPage implements OnInit {
  pautas: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  pauta_id: string="";

  votacao_condomino_id: string="";
  votacao_pauta_id: string="";

  voto: string="";

  votacao_id: string="";

  condomino: string = "";
  senha: string = "";

  condominos: any = [];

  condomino_id: string = "";
  condnome: string = "";

  condomino_fk: number = 0;


constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController,private storage: NativeStorage) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.votacao_id = data.votacao_id;
      this.assunto = data.assunto;
      this.conteudo = data.conteudo;
      this.status = data.status;
      this.votacao_condomino_id = data.votacao_condomino_id;
      this.pauta_id = data.pauta_id;

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


  pautlist(){
    this.router.navigate(['/pautas-home-condomino']);
  }


  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }
  
  
  segmentChanged(condominos:any){
    this.condomino_fk = condominos.detail.value;
    console.log(condominos);
  }

  segmentChangedd(voto:any){
    this.voto = voto.detail.value;
    console.log(voto);
  }



  async votacaoapi(pauta_id){

    if(this.voto == ""){
      const toast = await this.toastController.create({
        message: 'Vote em um dos campos!',
        duration: 3000,
        color: 'warning'
      });
      toast.present();
      return;
    }else{ 

      return new Promise(resolve => {
        let dados = {
          requisicao : 'vtscomvotacao',
          voto : this.voto,
          votacao_pauta_id : pauta_id,
          pauta_id : pauta_id
        
        };



        this.provider.dadosApi(dados, 'api_user.php').subscribe(async data => {
          if(data['success']) {
            console.log(data);
            this.router.navigate(['/pautas-home-condomino']);
            this.mensagemSalvar();
          }
        });
      
      
      });
    }

  }







  async votecom(){

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

            this.votacaoapi(this.pauta_id);

          }else{
            const toast = await this.toastController.create({
              message: 'Dados incorretos, verifique se o email e senha estão corretos!',
              duration: 2000,
              color: 'danger'
            });
            toast.present();
            console.log(data)
          }
          
        });
        this.router.navigate(['/pautas-home-condomino']);

    });

  }



}
