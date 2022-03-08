import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admhome',
  templateUrl: './admhome.page.html',
  styleUrls: ['./admhome.page.scss'],
})
export class AdmhomePage implements OnInit {

  constructor(private storage: NativeStorage, private router:Router, private provider:Post, public toast: ToastController) { }

  ngOnInit() {
  }
  
  popupform(){
    this.router.navigate(['/popupform']);
  }

  assembleiaadm(){
    this.router.navigate(['/assembleiaadm']);
  }
  usuarios(){
    this.router.navigate(['/usuarios']);
  }

  


}
