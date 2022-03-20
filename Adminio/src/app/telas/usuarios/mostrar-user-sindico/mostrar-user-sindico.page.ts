import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-user-sindico',
  templateUrl: './mostrar-user-sindico.page.html',
  styleUrls: ['./mostrar-user-sindico.page.scss'],
})
export class MostrarUserSindicoPage implements OnInit {

  nome: string = "";
  usuario: string = "";
  senha: string = "";
  apartamento: string = "";
  bloco: string = "";
  id: string = "";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post) { }


  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.apartamento = data.apartamento;
      this.bloco = data.bloco;

    });
  }


   Usuarios(){
    this.router.navigate(['/usuarios']);
  
  }

}
