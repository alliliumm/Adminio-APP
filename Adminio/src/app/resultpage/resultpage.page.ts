import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.page.html',
  styleUrls: ['./resultpage.page.scss'],
})
export class ResultpagePage implements OnInit {

  assunto: string = "";
  conteudo: string = "";
  complemento: string = "";
  voto: string = "";
  pautas : any = [];
  limit : number = 10;
  start : number = 0;
  pauta_id: string = "";

  constructor(private provider: Post) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.pautas = [];
    this.start = 0;
    this.carregar();
  }


  carregar(){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listaresult',
        assunto : this.assunto,
        voto : this.voto,
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {

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



}
