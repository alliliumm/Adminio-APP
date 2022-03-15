import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicados-fechadas-home-sindico',
  templateUrl: './comunicados-fechadas-home-sindico.page.html',
  styleUrls: ['./comunicados-fechadas-home-sindico.page.scss'],
})
export class ComunicadosFechadasHomeSindicoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";
  status: string = "";
  comunicado_id: string = "";
  comunicados_sindico_id: string = "";
  comunicados : any = [];
  limit : number = 10;
  start : number = 0;
 

  constructor(private router: Router, private provider: Post) { }
 

  ngOnInit() {

  }




  homesind(){
    this.router.navigate(['/home-sindico']);
  }


  comuabertas(){
    this.router.navigate(['/comunicados-home-sindico']);
  }


  mostrarcomunicado(comunicado_id, assunto, conteudo, status, comunicados_sindico_id, data_enviado, hora_enviado, cont_sinalizacoes){
    this.router.navigate(['/mostrar-comunicados-fechadas-sindico/' + comunicado_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + comunicados_sindico_id + '/' + data_enviado + '/' + hora_enviado + '/' + cont_sinalizacoes]);
  }


  carregarfechados(){
    return new Promise(resolve => {
      this.comunicados = [];
      let dados = {
        requisicao : 'listarfechadoscomunicados',
        assunto : this.assunto,
        status: this.status, 
        limit : this.limit,
        start : this.start
      };

        this.provider.dadosApi(dados, 'api_listar.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let assunto of data['result']){
            this.comunicados.push(assunto);
            
          }
        }
         
         resolve(true);
         
        });
    });

  }



  ionViewWillEnter(){
    this.comunicados = [];
    this.start = 0;
    this.carregarfechados();
  }

 //atualizar o list view

 doRefresh(event) {
    
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);


 }
//barra de rolagem
loadData(event) {

  this.start += this.limit;

  setTimeout(() => {
    this.carregarfechados().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}

}
