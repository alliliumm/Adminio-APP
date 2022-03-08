import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {


  morador : any = [];
  limit : number = 10;
  start : number = 0;
  nome : string = "";
  usuario : string = "";
  senha: string = "";
  senha_crip: string = "";
  apartamento: string = "";
  bloco: string = "";
  morador_id: string = "";

  constructor(private router: Router, private provider: Post) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.morador = [];
    this.start = 0;
    this.carregar();
  }

  addUsuarios(){
    this.router.navigate(['/add-usuario']);
  }
  admhome(){
    this.router.navigate(['/admhome']);
  }

  carregar(){
    return new Promise(resolve => {
      this.morador = [];
      let dados = {
        requisicao : 'listar',
        nome : this.nome, 
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let usuario of data['result']){
            this.morador.push(usuario);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }


  


  mostrar(morador_id, nome, usuario, senha, apartamento, bloco){
    this.router.navigate(['/mostrar-usuario/' + morador_id + '/' + nome + '/' + usuario + '/' + senha + '/' + apartamento + '/' + bloco]);
  }

  editar(morador_id, nome, usuario, senha, apartamento, bloco){
    this.router.navigate(['/add-usuario/' + morador_id + '/' + nome + '/' + usuario + '/' + senha+ '/' +  apartamento + '/' + bloco]);
  }

  
  excluir(morador_id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluir',
        morador_id : morador_id 
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
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  
  

}
