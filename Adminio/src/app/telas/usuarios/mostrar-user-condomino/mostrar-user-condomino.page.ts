import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-user-condomino',
  templateUrl: './mostrar-user-condomino.page.html',
  styleUrls: ['./mostrar-user-condomino.page.scss'],
})
export class MostrarUserCondominoPage implements OnInit {

  condomino_id: string = "";
  condnome: string = "";
  email_cond: string = "";
  tipo_condomino: string = "";
  conjunto: string = "";
  andar: string = "";
  apartamento: string = "";
  bloco: string = "";
 

  condominioo: any = [];
  condominos_condominioo_id: string="";
  condominioo_id : string ="";
  nomecond : string ="";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.condomino_id = data.condomino_id;
      this.condnome = data.condnome;
      this.email_cond = data.email_cond;
      this.tipo_condomino = data.tipo_condomino;
      this.apartamento = data.apartamento;
      this.bloco = data.bloco;
      this.andar = data.andar;
      this.conjunto = data.conjunto;

      this.condominioo_id = data.condominioo_id;
      this.nomecond = data.nomecond;
      this.condominos_condominioo_id = data.condominos_condominioo_id;
    });
  }


   Usuarios(){
    this.router.navigate(['/usuario-home-list-condomino']);
  
  }

  ionViewWillEnter(){
    this.condominioo = [];
    this.carregar(this.condominos_condominioo_id);
  }


  carregar(condominos_condominioo_id){
    return new Promise(resolve => {
      this.condominioo = [];
      let dados = {
        requisicao : 'apresentarcond',
        nomecond : this.nomecond,
        condominioo_id : condominos_condominioo_id

        };

        this.provider.dadosApi(dados, 'api_listar.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let nomecond of data['result']){
            this.condominioo.push(nomecond);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }


}
