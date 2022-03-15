import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-condomino',
  templateUrl: './cadastro-condomino.page.html',
  styleUrls: ['./cadastro-condomino.page.scss'],
})
export class CadastroCondominoPage implements OnInit {
  condnome: string = "";
  tipo_condomino: string="";
  conjunto: string="";
  bloco: string="";
  andar: string="";
  apartamento: string="";
  email_cond: string = "";
  senha_cond: string = "";
  condomino_id: string  = "";
  
  condominioo : any = [];

  nomecond: string = "";
  condominioo_id: string  = "";

  condominioo_fk: number = 0;


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.condomino_id = data.condomino_id;
      this.condnome = data.condnome;
      this.tipo_condomino = data.tipo_condomino;
      this.conjunto = data.conjunto;
      this.bloco = data.bloco;
      this.andar = data.andar;
      this.apartamento = data.apartamento;
      this.email_cond = data.email_cond;
      this.senha_cond = data.senha_cond;

      this.condominioo_id = data.condominioo_id;
      this.nomecond = data.nomecond;

      

    });

    return new Promise(resolve=> {
      let dados = {
        requisicao :'listarcond'
      };
      this.provider.dadosApi(dados,'api_listar.php').subscribe(data => {
         console.log(data);
        this.condominioo= data;
      });
    });
  }

  segmentChanged(condominioo:any){
    this.condominioo_fk = condominioo.detail.value;
    console.log(condominioo)
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }

  async cadastrarcondomino(){

    if(this.condnome == "" || this.tipo_condomino == "" || this.condominioo_fk == 0 || this.conjunto == "" || this.bloco == "" || this.andar == "" || this.apartamento == "" ||  this.email_cond == "" || this.senha_cond == ""){
      const toast = await this.toastController.create({
        message: 'Preencha todos os Campos!',
        duration: 3000,
        color: 'warning'
      });
      toast.present();
      return;
    }else{
      return new Promise(resolve => {
      
        let dados = {
          requisicao : 'addmo',
          condnome : this.condnome, 
          tipo_condomino : this.tipo_condomino,
          condominos_condominioo_id : this.condominioo_fk,
          conjunto : this.conjunto,
          bloco : this.bloco,
          andar : this.andar,
          apartamento : this.apartamento,
          email_cond : this.email_cond,
          senha_cond : this.senha_cond
        };
    
          this.provider.dadosApi(dados, 'api_cadastro.php').subscribe(data => {
            console.log(data);
            this.router.navigate(['/usuarios']);
            this.mensagemSalvar();
          });
            this.homeadm();
            
      });
  
    }
  
  }

  editarcond(){
  
  }

  homeadm(){
    this.router.navigate(['/admhome']);
  }


}
