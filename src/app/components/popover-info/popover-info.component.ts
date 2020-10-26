import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {


  items = [

    {
      name: 'twitter',
      icon: 'logo-twitter',
      color: 'twitter'

    },
    {
      name: 'facebook',
      icon: 'logo-facebook',
      color: 'facebook'

    },
    {
      name: 'google',
      icon: 'logo-google',
      color: 'google'

    }


  ]


  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: any) {

      this.popoverCtrl.dismiss({
        item: valor
      });
  }
}
