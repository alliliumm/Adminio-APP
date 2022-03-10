import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pautas-home-condomino',
  templateUrl: './pautas-home-condomino.page.html',
  styleUrls: ['./pautas-home-condomino.page.scss'],
})
export class PautasHomeCondominoPage implements OnInit {

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
    this.carregar();
  }

  userhome(){
    this.router.navigate(['/home-condomino']);
  }

  carregar(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listarpaut',
        assunto : this.assunto, 
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
    this.router.navigate(['/mostrar-pautas-condomino/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
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
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  

}
