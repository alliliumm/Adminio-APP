import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pautas-avaliacao-condomino',
  templateUrl: './pautas-avaliacao-condomino.page.html',
  styleUrls: ['./pautas-avaliacao-condomino.page.scss'],
})
export class PautasAvaliacaoCondominoPage implements OnInit {

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




  userhome(){
    this.router.navigate(['/home-condomino']);
  }

  resultados(){
    this.router.navigate(['/resultados-condomino']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-condomino']);
  }

  pautasabertas(){
    this.router.navigate(['/pautas-home-condomino']);
  }

  carregaravaliacao(pauta_id){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listaravaliacaopaut',
        assunto : this.assunto,
        conteudo : this.conteudo,
        pauta_id : pauta_id,
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
      this.carregaravaliacao(this.pauta_id);
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
    this.carregaravaliacao(this.pauta_id).then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}



}
