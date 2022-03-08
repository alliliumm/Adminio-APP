import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermsg',
  templateUrl: './usermsg.page.html',
  styleUrls: ['./usermsg.page.scss'],
})
export class UsermsgPage implements OnInit {

  id_msg: string = ""
  mensagem: string = ""
  dia: string = ""
  hora: string = ""
  historico: any = []
  limit : number = 10;
  start : number = 0;

  constructor(private router: Router, private provider: Post) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.historico = [];
    this.start = 0;
    this.carregar();
  }


  userhome(){
    this.router.navigate(['/userhome'])
  }


  carregar(){
    return new Promise(resolve => {
      this.historico = [];
      let dados = {
        requisicao : 'listarmsg',
        mensagem : this.mensagem,
        dia : this.dia,
        hora : this.hora,
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'api_user.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let mensagem of data['result']){
            this.historico.push(mensagem);
            
          }
        }
         
         resolve(true);
         
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

