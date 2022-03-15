import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-comunicados-sindico',
  templateUrl: './criacao-comunicados-sindico.page.html',
  styleUrls: ['./criacao-comunicados-sindico.page.scss'],
})
export class CriacaoComunicadosSindicoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";
  comunicado_id: string = "";
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
      this.comunicado_id = data.comunicado_id;
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

  homecomunicados(){
    this.router.navigate(['/comunicados-home-sindico']);
  }

  async enviar(){

    if(this.assunto == ""){
      const toast = await this.toast.create({
        message: 'Escreva o assunto',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    if(this.conteudo == ""){
      const toast = await this.toast.create({
        message: 'Escreva o conteúdo',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

    if(this.status == ""){
      const toast = await this.toast.create({
        message: 'Selecione um status',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

    if(this.senha == ""){
      const toast = await this.toast.create({
        message: 'Escreva a sua senha',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

    if(this.sindico == ""){
      const toast = await this.toast.create({
        message: 'Selecione um síndico',
        duration: 3000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

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
                requisicao : 'newcomunicado',
                assunto : this.assunto, 
                conteudo : this.conteudo,
                status : this.status,
                comunicados_sindico_id : this.sindico_fk,
        
              };
        
                this.provider.dadosApi(dados, 'api_adm.php').subscribe(async data => {
                  if(data['success']) {
                    this.storage.setItem('session_storage', data['result']);
                    this.router.navigate([ '/comunicados-home-sindico']);
                    this.mensagemSalvar();
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
  }

}
