import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.page.html',
  styleUrls: ['./popupform.page.scss'],
})
export class PopupformPage implements OnInit {


  mensagem : string = ""
  msg : string = ""


  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public ToastController: ToastController) { }


  ngOnInit() {
  }

  admhome(){
    this.router.navigate(['/admhome']);
  }



  async mensagemSalvar() {
    const toast = await this.ToastController.create({
      message: 'Enviado com Sucesso!!',
      duration: 1000
    });
    toast.present();
    this.admhome();
  }

  async mensagempop() {

    if(this.mensagem == ""){
      const toast = await this.ToastController.create({
        message: 'Escreva a mensagem',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      return;
    }

    return new Promise(resolve =>{
      let dados  = {
        requisicao : 'newmsg',
        mensagem : this.mensagem
      };
    this.provider.dadosApi(dados, 'api_adm.php').subscribe(data => {
      this.mensagemSalvar();
    });
    })
}




}
