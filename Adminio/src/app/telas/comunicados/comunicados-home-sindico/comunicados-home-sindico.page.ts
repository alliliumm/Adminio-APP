import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicados-home-sindico',
  templateUrl: './comunicados-home-sindico.page.html',
  styleUrls: ['./comunicados-home-sindico.page.scss'],
})
export class ComunicadosHomeSindicoPage implements OnInit {

  assunto: string = "";
  conteudo: string = "";
  status: string = "";
  comunicado_id: string = "";
  comunicados_sindico_id: string = "";
  data_enviado: string = "";
  hora_enviado: string = "";
  cont_sinalizacoes: string = "";
  comunicados : any = [];
  limit : number = 10;
  start : number = 0;
 

  constructor(private router: Router, private provider: Post) { }
 

  ngOnInit() {

  }




  homesind(){
    this.router.navigate(['/home-sindico']);
  }


  comufechadas(){
    this.router.navigate(['/comunicados-fechadas-home-sindico']);
  }


  criacaocomunicados(){
    this.router.navigate(['/criacao-comunicados-sindico']);
  }




  editarstatus(comunicado_id, assunto, status, comunicados_sindico_id){
    this.router.navigate(['/edicao-status-comunicados-sindico/' + comunicado_id + '/' + assunto + '/' + status + '/' + comunicados_sindico_id]);
  }

  mostrarcomunicado(comunicado_id, assunto, conteudo, status, comunicados_sindico_id, data_enviado, hora_enviado, cont_sinalizacoes){
    this.router.navigate(['/mostrar-comunicados-sindico/' + comunicado_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + comunicados_sindico_id + '/' + data_enviado + '/' + hora_enviado + '/' + cont_sinalizacoes]);
  }

  editarcomunicados(comunicado_id, assunto, conteudo, status, comunicados_sindico_id ){
    this.router.navigate(['/edicao-comunicados-sindico/' + comunicado_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + comunicados_sindico_id]);
  }






  carregarabertos(){
    return new Promise(resolve => {
      this.comunicados = [];
      let dados = {
        requisicao : 'listardisponivelcomunicado',
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

  
  excluir(comunicado_id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluircomunicado',
        comunicado_id : comunicado_id 
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }
  



  ionViewWillEnter(){
    this.comunicados = [];
    this.start = 0;
    this.carregarabertos();
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
    this.carregarabertos().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}

}
