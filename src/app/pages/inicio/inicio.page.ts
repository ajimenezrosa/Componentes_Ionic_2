import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interafaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Observable<Componente[]>;



  constructor( private menuCtrl: MenuController,
              private dataservices: DataService) { }

  ngOnInit() {
      this.componentes = this.dataservices.getMenuOpts();
  }

  mostrarMenu() {
      // console.log("menu llamada");
      this.menuCtrl.open('first');
  }




}
