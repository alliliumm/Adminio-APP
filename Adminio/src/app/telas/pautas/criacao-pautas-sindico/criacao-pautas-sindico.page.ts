import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pautas-sindico',
  templateUrl: './criacao-pautas-sindico.page.html',
  styleUrls: ['./criacao-pautas-sindico.page.scss'],
})
export class CriacaoPautasSindicoPage implements OnInit {
  assunto: string = "";
  conteudo: string = "";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toast: ToastController) { }

  ngOnInit() {
   
  }

  admhome(){
    this.router.navigate(['/admhome']);
  }

  async enviar(){

    if(this.assunto == ""){
      const toast = await this.toast.create({
        message: 'Escreva o assunto',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      return;
    }

    if(this.conteudo == ""){
      const toast = await this.toast.create({
        message: 'Escreva uma pauta',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }

    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'newpaut',
        assunto : this.assunto, 
        conteudo : this.conteudo
        };

        this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
          this.mensagemSalvar();
        });
    });

  }

  async mensagemSalvar() {
    const toast = await this.toast.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
    this.admhome();
  }

}
