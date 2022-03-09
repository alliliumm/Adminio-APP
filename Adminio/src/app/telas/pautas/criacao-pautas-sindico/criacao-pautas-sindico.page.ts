import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pautas-sindico',
  templateUrl: './criacao-pautas-sindico.page.html',
  styleUrls: ['./criacao-pautas-sindico.page.scss'],
})
export class CriacaoPautasSindicoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";
  pauta_id: string = "";
  status: string = "";

  sindico: string = "";
  senha: string = "";

  sindicos: any = [];

  sindico_id: string = "";
  nome: string = "";

  sindico_fk: number = 0;


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toast: ToastController, private storage: NativeStorage) { }

  ngOnInit() {

    this.actRouter.params.subscribe((data:any)=>{
      this.pauta_id = data.pauta_id;
      this.assunto = data.assunto;
      this.conteudo = data.conteudo;
      this.status = data.status;

      this.sindico_id = data.sindico_id;
      this.nome = data.nome;

      

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

  admhome(){
    this.router.navigate(['/admhome']);
  }

  async enviar(){

    if(this.assunto == ""){
      const toast = await this.toast.create({
        message: 'Escreva o assunto',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      return;
    }

    if(this.conteudo == ""){
      const toast = await this.toast.create({
        message: 'Escreva uma pauta',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'newpaut',
        assunto : this.assunto, 
        conteudo : this.conteudo,
        status : this.status,
        pautas_sindico_id : this.sindico_fk,
        senha: this.senha

        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(async data => {

          var alert = data['msg'];
          if(data['pagepaut']) {
            this.storage.setItem('session_storage', data['result']);
            if(data['success']){
              this.router.navigate([ '/pautas-home-sindico']);
            }
            this.mensagemSalvar();
            this.sindico_id = "";
            this.senha = "";
            console.log(data);
          }else{
            const toast = await this.toast.create({
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
    const toast = await this.toast.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
    this.admhome();
  }

}
