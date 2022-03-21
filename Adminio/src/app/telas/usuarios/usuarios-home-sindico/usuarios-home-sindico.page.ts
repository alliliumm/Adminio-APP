import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-usuarios-home-sindico',
  templateUrl: './usuarios-home-sindico.page.html',
  styleUrls: ['./usuarios-home-sindico.page.scss'],
})
export class UsuariosHomeSindicoPage implements OnInit {

  nome: string = "";
  tipo_sindico: string = "";
  email_sin: string = "";
  sindico_id: string = "";
  sindico_condominioo_id: string = "";
  sindicos : any = [];
  limit : number = 10;
  start : number = 0;
 

  constructor(private router: Router, private provider: Post, private menu: MenuController) { this.menu.enable(false, 'custom');}
 

  ngOnInit() {

  }




  homesind(){
    this.router.navigate(['/home-sindico']);
  }


  condominos(){
    this.router.navigate(['/usuario-home-list-condomino']);
  }



  mostrarsindico(sindico_id, nome, tipo_sindico, sindico_condominioo_id, email_sin){
    this.router.navigate(['/mostrar-user-sindico/' + sindico_id + '/' + nome + '/' + tipo_sindico + '/' + sindico_condominioo_id + '/' + email_sin]);
  }
  

  editarsindico(sindico_id, nome, tipo_sindico, sindico_condominioo_id, email_sin){
    this.router.navigate(['/editar-user-sindico/' + sindico_id + '/' + nome + '/' + tipo_sindico + '/' + sindico_condominioo_id + '/' + email_sin]);
  }


  carregarsindicos(){
    return new Promise(resolve => {
      this.sindicos = [];
      let dados = {
        requisicao : 'listarusersin',
        nome : this.nome,
        limit : this.limit,
        start : this.start
      };

        this.provider.dadosApi(dados, 'api_listar.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let nome of data['result']){
            this.sindicos.push(nome);
            
          }
        }
         
         resolve(true);
         
        });
    });

  }

  
  



  ionViewWillEnter(){
    this.sindicos = [];
    this.start = 0;
    this.carregarsindicos();
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
    this.carregarsindicos().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
}
