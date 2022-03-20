import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
 

  constructor(private router: Router, private provider: Post, private menu: MenuController) { this.menu.enable(false, 'custom');}
 

  ngOnInit() {

  }


  userhome(){
    this.router.navigate(['/home-condomino']);
  }

  mostrar(pauta_id, assunto, conteudo, status, pautas_sindico_id ){
    this.router.navigate(['/mostrar-pautas-condomino/' + pauta_id + '/' + assunto + '/' + conteudo + '/' + status + '/' + pautas_sindico_id]);
  }

  resultados(){
    this.router.navigate(['/resultados-condomino']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-condomino']);
  }

  pautavaliacao(){
    this.router.navigate(['/pautas-avaliacao-condomino']);
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




  ionViewWillEnter(){
    this.pautas = [];
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
