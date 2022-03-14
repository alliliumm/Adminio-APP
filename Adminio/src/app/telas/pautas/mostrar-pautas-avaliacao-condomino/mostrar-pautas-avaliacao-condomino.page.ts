import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-mostrar-pautas-avaliacao-condomino',
  templateUrl: './mostrar-pautas-avaliacao-condomino.page.html',
  styleUrls: ['./mostrar-pautas-avaliacao-condomino.page.scss'],
})
export class MostrarPautasAvaliacaoCondominoPage implements OnInit {
  pautas: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  pautas_sindico_id: string="";
  pauta_id : string ="";

  sindico: string = "";
  senha: string = "";




constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, private storage: NativeStorage) { }


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
    this.router.navigate(['/pautas-avaliacao-condomino']);
  }



}
