import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pautas-avaliacao-sindico',
  templateUrl: './pautas-avaliacao-sindico.page.html',
  styleUrls: ['./pautas-avaliacao-sindico.page.scss'],
})
export class PautasAvaliacaoSindicoPage implements OnInit {
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




  homesind(){
    this.router.navigate(['/home-sindico']);
  }

  resultados(){
    this.router.navigate(['/resultados-sindico']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-sindico']);
  }

  pautasabertas(){
    this.router.navigate(['/pautas-home-sindico']);
  }



  mostrar(pauta_id, assunto, conteudo, status, pautas_sindico_id ){
    this.router.navigate(['/mostrar-pautas-avaliacao-sindico/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
  }




  carregaravaliacao(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listaravaliacaopaut',
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


 
  



  ionViewWillEnter(){
    this.pautas = [];
    this.start = 0;
    this.carregaravaliacao();
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
    this.carregaravaliacao().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  
}
