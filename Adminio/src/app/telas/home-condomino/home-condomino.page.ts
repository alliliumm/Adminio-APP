import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-condomino',
  templateUrl: './home-condomino.page.html',
  styleUrls: ['./home-condomino.page.scss'],
})
export class HomeCondominoPage implements OnInit {

  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public toast: ToastController) { }


  ngOnInit() {
  }

  pautas(){
    this.router.navigate(['/pautas-home-condomino']);
  }
  usermsg(){
    this.router.navigate(['/usermsg']);
  }
}
