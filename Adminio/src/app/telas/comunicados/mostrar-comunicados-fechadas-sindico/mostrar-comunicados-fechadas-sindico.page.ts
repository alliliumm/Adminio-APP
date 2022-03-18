import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';


@Component({
  selector: 'app-mostrar-comunicados-fechadas-sindico',
  templateUrl: './mostrar-comunicados-fechadas-sindico.page.html',
  styleUrls: ['./mostrar-comunicados-fechadas-sindico.page.scss'],
})
export class MostrarComunicadosFechadasSindicoPage implements OnInit {
  comunicados: any = [];
  assunto: string="";
  conteudo: string="";
  status: string="";
  comunicados_sindico_id: string="";
  comunicado_id : string ="";
  cont_sinalizacoes : number;
  data_enviado : string ="";
  hora_enviado : string ="";



constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }


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
  }


  pautlist(){
    this.router.navigate(['/comunicados-fechadas-home-sindico']);
  }

  

}
