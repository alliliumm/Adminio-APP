import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-sindico',
  templateUrl: './resultados-sindico.page.html',
  styleUrls: ['./resultados-sindico.page.scss'],
})
export class ResultadosSindicoPage implements OnInit {
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
    this.router.navigate(['/home-sindico']);
  }

  pautasavaliacao(){
    this.router.navigate(['/pautas-avaliacao-sindico']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-sindico']);
  }

  pautasabertas(){
    this.router.navigate(['/pautas-home-sindico']);
  }

  editarstatus(pauta_id, assunto, status, pautas_sindico_id){
    this.router.navigate(['/edicao-status-resultado-sindico/' + pauta_id + '/' + assunto + '/' + status + '/' + pautas_sindico_id]);
  }



  carregararesultados(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listarresultadospaut',
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
    this.carregararesultados();
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
    this.carregararesultados().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}

}
