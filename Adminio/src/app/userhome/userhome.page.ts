import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {

  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public toast: ToastController) { }


  ngOnInit() {
  }

  assembleia(){
    this.router.navigate(['/assembleia']);
  }
  usermsg(){
    this.router.navigate(['/usermsg']);
  }

}
