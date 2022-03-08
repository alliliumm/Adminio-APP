import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {

  email : string= "";
  sindico : any = [];
  senha : string = "";


  constructor(private actRouter: ActivatedRoute, private storage: NativeStorage, private router:Router, private provider: Post, public toast: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.email = data.email;
      this.senha = data.senha;
    });
  }

  addCond(){
    this.router.navigate(['/cadastro-cond']);
  }

  
  async login(){

    if(this.email == "" || this.senha == ""){
      const toast = await this.toast.create({
        message: 'Preencha todos os campos!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
      
    }else{

    return new Promise(resolve =>{
      
      let dados = {
        email : this.email, 
        senha : this.senha,
        requisicao : 'login',
      };

      this.provider.dadosApi(dados,'api_login.php').subscribe(async data => {

        var alert = data['msg'];
        if(data['pageadm']) {
          this.storage.setItem('session_storage', data['result']);
          if(data['success']){
            this.router.navigate([ '/home-sindico']);
          }
          const toast = await this.toast.create({
            message: 'Logado com Sucesso!!',
            duration: 1000,
            color: 'success'
          });
          toast.present();
          this.email = "";
          this.senha = "";
          console.log(data);
        }else if(data['pagemor']){
          this.storage.setItem('session_storage', data['result']);
          if(data['success']){
            this.router.navigate([ '/home-condomino']);
          }
          const toast = await this.toast.create({
            message: 'Logado com Sucesso!!',
            duration: 1000,
            color: 'success'
          });
          toast.present();
          this.email = "";
          this.senha = "";
          console.log(data);
        }else{
          const toast = await this.toast.create({
            message: alert,
            duration: 2000,
            color: 'danger'
          });
          toast.present();
          console.log(data)
        }
         
                 
      });
      
        
    }); 

    }
  }

}
