import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-user-sindico',
  templateUrl: './mostrar-user-sindico.page.html',
  styleUrls: ['./mostrar-user-sindico.page.scss'],
})
export class MostrarUserSindicoPage implements OnInit {

  sindico_id: string = "";
  nome: string = "";
  email_sin: string = "";
  tipo_sindico: string = "";

  condominioo: any = [];
  sindico_condominioo_id: string="";
  condominioo_id : string ="";
  nomecond : string ="";


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.sindico_id = data.sindico_id;
      this.nome = data.nome;
      this.email_sin = data.email_sin;
      this.tipo_sindico = data.tipo_sindico;

      this.condominioo_id = data.condominioo_id;
      this.nomecond = data.nomecond;
      this.sindico_condominioo_id = data.sindico_condominioo_id;

    });
  }


  Usuarios(){
    this.router.navigate(['/usuarios-home-sindico']);
  
  }

  ionViewWillEnter(){
    this.condominioo = [];
    this.carregar(this.sindico_condominioo_id);
  }


  carregar(sindico_condominioo_id){
    return new Promise(resolve => {
      this.condominioo = [];
      let dados = {
        requisicao : 'apresentarcond',
        nomecond : this.nomecond,
        condominioo_id : sindico_condominioo_id

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
