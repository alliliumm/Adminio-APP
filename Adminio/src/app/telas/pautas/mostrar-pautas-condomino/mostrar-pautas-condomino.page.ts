import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';


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
  pautas_sindico_id: string="";
  nome: string="";

  comentario: string="";
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
      this.status = data.status;
      this.pautas_sindico_id = data.pautas_sindico_id;

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
  

  segmentChangedd(voto:any){
    this.voto = voto.detail.value;
    console.log(voto);
  }

  async votecom(){

    if(this.voto == ""){
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
          this.router.navigate(['/pautas-home-condomino']);
          this.mensagemSalvar();
        });
      
      
      });
    }
  
  }

}
