import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-home-list-condomino',
  templateUrl: './usuario-home-list-condomino.page.html',
  styleUrls: ['./usuario-home-list-condomino.page.scss'],
})
export class UsuarioHomeListCondominoPage implements OnInit {

  condnome: string = "";
  tipo_condomino: string = "";
  email_cond: string = "";
  condomino_id: string = "";
  condomino_condominioo_id: string = "";
  condominos : any = [];
  limit : number = 10;
  start : number = 0;
 

  constructor(private router: Router, private provider: Post) { }
 

  ngOnInit() {

  }




  homesind(){
    this.router.navigate(['/home-sindico']);
  }


  sindicos(){
    this.router.navigate(['/usuarios-home-sindico']);
  }


  cadastrocondominos(){
    this.router.navigate(['/cadastro-condomino']);
  }

  mostrarcond(condomino_id, condnome, tipo_condomino, condominos_condominioo_id, email_cond, conjunto, bloco, andar, apartamento){
    this.router.navigate(['/mostrar-user-condomino/' + condomino_id + '/' + condnome + '/' + tipo_condomino + '/' + condominos_condominioo_id + '/' + email_cond + '/' + conjunto + '/' + bloco + '/' + andar + '/' + apartamento]);
  }

  editarcond(condomino_id, condnome, tipo_condomino, condominos_condominioo_id, email_cond, conjunto, bloco, andar, apartamento){
    this.router.navigate(['/editar-user-condomino/' + condomino_id + '/' + condnome + '/' + tipo_condomino + '/' + condominos_condominioo_id + '/' + email_cond + '/' + conjunto + '/' + bloco + '/' + andar + '/' + apartamento]);
  }


  carregarcondominos(){
    return new Promise(resolve => {
      this.condominos = [];
      let dados = {
        requisicao : 'listarusercond',
        condnome : this.condnome,
        limit : this.limit,
        start : this.start
      };

        this.provider.dadosApi(dados, 'api_listar.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let condnome of data['result']){
            this.condominos.push(condnome);
            
          }
        }
         
         resolve(true);
         
        });
    });

  }

  
  



  ionViewWillEnter(){
    this.condominos = [];
    this.start = 0;
    this.carregarcondominos();
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
    this.carregarcondominos().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}


}
