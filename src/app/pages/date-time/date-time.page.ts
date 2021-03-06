import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  customPikerOption = {
    buttons: [{
        text: 'Save',
        handler: () => console.log('Click save!')
    },
    {
      text: 'Log',
      handler: () => {
          console.log('Clicked log. Do not Dismiss');
          return false;
      }
    }
  ]
  };

  constructor() {


   }

  ngOnInit() {
  }

  cambioFecha( event ) {
      console.log(event);
      // Recuperar la fecha a un tipo fecha de javascript
      console.log( new Date(event.detail.value));
  }

  




}
