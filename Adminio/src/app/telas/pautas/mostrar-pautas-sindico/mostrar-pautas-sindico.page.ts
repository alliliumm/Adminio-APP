import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-mostrar-pautas-sindico',
  templateUrl: './mostrar-pautas-sindico.page.html',
  styleUrls: ['./mostrar-pautas-sindico.page.scss'],
})
export class MostrarPautasSindicoPage implements OnInit {
  pautas: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  pautas_sindico_id: string="";
  pauta_id : string ="";



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
    this.router.navigate(['/pautas-home-sindico']);
  }

  enviareditsin(pauta_id, assunto, conteudo, status, pautas_sindico_id){
    this.router.navigate(['/edicao-pautas-sindico/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
  }

  excluirpaut(pauta_id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluirpaut',
        pauta_id : pauta_id 
        };
        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
        });
        this.router.navigate(['/pautas-home-sindico']);
    });
  }

 
}
