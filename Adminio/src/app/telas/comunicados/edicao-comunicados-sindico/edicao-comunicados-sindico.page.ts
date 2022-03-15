import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-comunicados-sindico',
  templateUrl: './edicao-comunicados-sindico.page.html',
  styleUrls: ['./edicao-comunicados-sindico.page.scss'],
})
export class EdicaoComunicadosSindicoPage implements OnInit {
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

  pauthomesind(){
    this.router.navigate(['/comunicados-home-sindico']);
  }

  async enviaredit(comunicado_id){

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
                requisicao : 'editcomunicado',
                assunto : this.assunto, 
                conteudo : this.conteudo,
                status : this.status,
                comunicados_sindico_id : this.sindico_fk,
                comunicado_id: comunicado_id
        
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
