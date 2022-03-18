import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home-condomino',
  templateUrl: './home-condomino.page.html',
  styleUrls: ['./home-condomino.page.scss'],
})
export class HomeCondominoPage implements OnInit {

  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public toast: ToastController, private menu: MenuController) { this.menu.enable(false, 'custom');}


  ngOnInit() {
  }

  pautas(){
    this.router.navigate(['/pautas-home-condomino']);
  }
  usermsg(){
    this.router.navigate(['/comunicados-home-condomino']);
  }
  homecond(){
    this.router.navigate(['/logins']);
  }
}
