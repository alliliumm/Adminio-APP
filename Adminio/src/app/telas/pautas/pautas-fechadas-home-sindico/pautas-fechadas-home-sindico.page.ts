import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pautas-fechadas-home-sindico',
  templateUrl: './pautas-fechadas-home-sindico.page.html',
  styleUrls: ['./pautas-fechadas-home-sindico.page.scss'],
})
export class PautasFechadasHomeSindicoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";
  status: string = "";
  pauta_id: string = "";
  pautas_sindico_id: string = "";
  pautas : any = [];
  limit : number = 10;
  start : number = 0;
 

  constructor(private router: Router, private provider: Post) { }
 

  ngOnInit() {

  }


  ionViewWillEnter(){
    this.pautas = [];
    this.start = 0;
    this.carregarabertos();
  }

  homesind(){
    this.router.navigate(['/home-sindico']);
  }

  resultados(){
    this.router.navigate(['/resultados-sindico']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-sindico']);
  }

  pautavaliacao(){
    this.router.navigate(['/pautas-avaliacao-sindico']);
  }

  criacaopauta(){
    this.router.navigate(['/criacao-pautas-sindico']);
  }

  editarstatus(pauta_id, assunto, status, pautas_sindico_id){
    this.router.navigate(['/edicao-status-sindico/' + pauta_id + '/' + assunto + '/' + status + '/' + pautas_sindico_id]);
  }


  carregarabertos(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listarabertospaut',
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
            this.pautas.push(assunto);
            
          }
        }
         
         resolve(true);
         
        });
    });

  }

  carregarfechados(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listarfechadospaut',
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
            this.pautas.push(assunto);
            
          }
        }
         
         resolve(true);
         
        });
    });

  }

  mostrar(pauta_id, assunto, conteudo, status, pautas_sindico_id ){
    this.router.navigate(['/mostrar-pautas-sindico/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
  }

  editar(pauta_id, assunto, conteudo, status, pautas_sindico_id ){
    this.router.navigate(['/edicao-pautas-sindico/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
  }

  
  excluir(pauta_id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluirpaut',
        pauta_id : pauta_id 
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
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
