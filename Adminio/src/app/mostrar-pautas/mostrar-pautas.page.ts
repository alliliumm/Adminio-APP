import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-mostrar-pautas',
  templateUrl: './mostrar-pautas.page.html',
  styleUrls: ['./mostrar-pautas.page.scss'],
})
export class MostrarPautasPage implements OnInit {

  pautas: any = [];
  assunto: string="";
  conteudo: string="";
  complemento: string="";
  voto: string="";
  pauta_id : string ="";
  id_morador: string ="";
  pauta_fk: number = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.pauta_id = data.pauta_id;
      this.assunto = data.assunto;
      this.conteudo = data.conteudo;
    });

    return new Promise(resolve=> {
      let dados = {
        requisicao :'listPautas'
      };
      this.provider.dadosApi(dados,'api_user.php').subscribe(data => {
         console.log(data);
        this.pautas= data;
      });
    });
  }


  userhome(){
    this.router.navigate(['/userhome']);
  }


  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }
  
  segmentChanged(pauta:any){
    this.pauta_fk = pauta.detail.value;
    console.log(pauta)
  }

  segmentChangedd(voto:any){
    this.voto = voto.detail.value;
    console.log(voto);
  }

  async votecom(){

    if(this.voto == "" || this.pauta_fk == 0 ){
      const toast = await this.toastController.create({
        message: 'Selecione todos os Campos!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }else{ 
      return new Promise(resolve => {
        let dados = {
          requisicao : 'vtscom',
          voto : this.voto,
          pauta_id : this.pauta_fk
        
        };



        this.provider.dadosApi(dados, 'api_user.php').subscribe(data => {
          console.log(data);
          this.router.navigate(['/userhome']);
          this.mensagemSalvar();
        });
      
      
      });
    }
  
  }
  
}
  
