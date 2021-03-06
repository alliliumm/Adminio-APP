import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';


@Component({
  selector: 'app-home-sindico',
  templateUrl: './home-sindico.page.html',
  styleUrls: ['./home-sindico.page.scss'],
})
export class HomeSindicoPage implements OnInit {

  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public toast: ToastController, private menu: MenuController) { this.menu.enable(false, 'custom');}

  ngOnInit() {
  }
  
  homecond(){
    this.router.navigate(['/logins']);
  }
  
  popupform(){
    this.router.navigate(['/comunicados-home-sindico']);
  }
  assembleiaadm(){
    this.router.navigate(['/pautas-home-sindico']);
  }
  usuarios(){
    this.router.navigate(['/usuarios-home-sindico']);
  }


}
