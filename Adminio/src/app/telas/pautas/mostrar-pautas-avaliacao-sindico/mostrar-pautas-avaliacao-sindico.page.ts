import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-mostrar-pautas-avaliacao-sindico',
  templateUrl: './mostrar-pautas-avaliacao-sindico.page.html',
  styleUrls: ['./mostrar-pautas-avaliacao-sindico.page.scss'],
})
export class MostrarPautasAvaliacaoSindicoPage implements OnInit {
 pautas: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  pautas_sindico_id: string="";
  pauta_id : string ="";

  sindico: string = "";
  senha: string = "";

  sindicos: any = [];

  sindico_id: string = "";
  nome: string = "";

  sindico_fk: number = 0;

  votacao: any = [];
  votacao_pauta_id: string="";
  votacao_id : string ="";
  cont_votosim : string ="";
  cont_votonao : string ="";



constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, private storage: NativeStorage) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.pauta_id = data.pauta_id;
      this.assunto = data.assunto;
      this.conteudo = data.conteudo;
      this.status = data.status;
      this.pautas_sindico_id = data.pautas_sindico_id;

      this.sindico_id = data.sindico_id;
      this.nome = data.nome;

      this.votacao_id = data.votacao_id;
      this.cont_votosim = data.cont_votosim;
      this.cont_votonao = data.cont_votonao;
      this.votacao_pauta_id = data.votacao_pauta_id;


    });
    return new Promise(resolve=> {
      let dados = {
        requisicao :'listarsindico'
      };
      this.provider.dadosApi(dados,'api_listar.php').subscribe(data => {
         console.log(data);
        this.sindicos= data;
      });
    });
  }

  
  segmentChanged(sindicos:any){
    this.sindico_fk = sindicos.detail.value;
    console.log(sindicos)
  }


  pautlist(){
    this.router.navigate(['/pautas-avaliacao-sindico']);
  }



  async editstatus(pauta_id){

    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'consultuserpaut',
        pautas_sindico_id : this.sindico_fk,
        senha: this.senha

      };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(async data => {
          var alert = data['msg'];
          if(data['consultpagepaut']) {
            this.storage.setItem('session_storage', data['result']);
            this.sindico = "";
            this.senha = "";
            console.log(data);

            return new Promise(resolve => {
              let dados = {
                  requisicao : 'editstatus',
                  status : this.status,
                  pautas_sindico_id : this.sindico_fk,
                  pauta_id: pauta_id
        
              };
        
                this.provider.dadosApi(dados, 'api_adm.php').subscribe(async data => {
                  if(data['success']) {
                    this.storage.setItem('session_storage', data['result']);
                    this.router.navigate([ '/pautas-avaliacao-sindico']);
                    this.mensagemSalvar();
                    console.log(data);
                  }else{
                    const toast = await this.toastController.create({
                      message: alert,
                      duration: 2000,
                      color: 'danger'
                    });
                    toast.present();
                    console.log(data)
                  }
                  
                });
                
            });
          }else{
            const toast = await this.toastController.create({
              message: alert,
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


  ionViewWillEnter(){
    this.votacao = [];
    this.carregar(this.pauta_id);
  }


  carregar(pauta_id){
    return new Promise(resolve => {
      this.votacao = [];
      let dados = {
        requisicao : 'apresentarvotos',
        cont_votosim : this.cont_votosim,
        cont_votonao : this.cont_votonao,
        pauta_id : pauta_id

        };

        this.provider.dadosApi(dados, 'api_listar.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let voto of data['result']){
            this.votacao.push(voto);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }

}
