import { HomeSindicoPage } from './../../home-sindico/home-sindico.page';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-condomino',
  templateUrl: './resultados-condomino.page.html',
  styleUrls: ['./resultados-condomino.page.scss'],
})
export class ResultadosCondominoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";
  status: string = "";
  pauta_id: string = "";
  pautas_sindico_id: string = "";
  pautas : any = [];
  limit : number = 10;
  start : number = 0;

  votacao: any = [];
  votacao_pauta_id: string="";
  votacao_id : string ="";
  cont_votosim : string ="";
  cont_votonao : string ="";

  constructor(private actRouter: ActivatedRoute,private router: Router, private provider: Post) { }
 

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.votacao_id = data.votacao_id;
      this.cont_votosim = data.cont_votosim;
      this.cont_votonao = data.cont_votonao;
      this.votacao_pauta_id = data.votacao_pauta_id;
    });
  }

  userhome(){
    this.router.navigate(['/home-condomino']);
  }

  pautasavaliacao(){
    this.router.navigate(['/pautas-avaliacao-condomino']);
  }

  pautfechadas(){
    this.router.navigate(['/pautas-fechadas-home-condomino']);
  }

  pautasabertas(){
    this.router.navigate(['/pautas-home-condomino']);
  }



  carregarresultados(pauta_id){
    return new Promise(resolve => {
      this.pautas = [];
      let dados = {
        requisicao : 'listarresultadospaut',
        assunto : this.assunto,
        conteudo : this.conteudo,
        cont_votosim : this.cont_votosim,
        cont_votonao : this.cont_votosim,
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
      this.carregarresultados(this.pauta_id);
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
      this.carregarresultados(this.pauta_id).then(()=>{ 
        event.target.complete();
       });
     
    }, 500);
    
  
  }

}
