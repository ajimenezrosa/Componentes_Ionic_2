import { Component, OnInit } from '@angular/core';


interface  Componente {

      icon: string;
      name: string;
      redirectTo: string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [

      {
        icon: 'american-football-outline',
        name: 'Action-Sheet',
        redirectTo: '/action-sheet'
      },
      {
        icon: 'logo-apple-appstore',
        name: 'Alerts',
        redirectTo: '/alert'
      },
      {
        icon: 'beaker-outline',
        name: 'Avatar',
        redirectTo: '/avatar'
      },
      {
        icon: 'radio-button-off-outline',
        name: 'Botones',
        redirectTo: '/botones'
      },
      {
        icon: 'card-outline',
        name: 'Cards',
        redirectTo: '/card'
      },
      {
        icon: 'checkmark-circle-outline',
        name: 'CheckMark',
        redirectTo: '/checks'
      },
      {
        icon: 'calendar-outline',
        name: 'DateTime',
        redirectTo: '/date-time'
      },
      {
        icon: 'car-outline',
        name: 'Fab',
        redirectTo: '/fab'
    
      }
      ,
      {
        icon: 'grid-outline',
        name: 'Grid',
        redirectTo: '/grid'
      }
      ,
      {
        icon: 'infinite-outline',
        name: 'Infinite-Scroll',
        redirectTo: '/infinit'
      }




  ]



  constructor() { }

  ngOnInit() {
  }

}
