import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {



  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log(event);
    setTimeout( () => {

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);

      // Si los elementos pasan de 50 quiere decir que ya no tenemos elementos

      if ( this.data.length > 50) {
          this.infiniteScroll.complete();
          this.infiniteScroll.disabled = true;
        }


      // event.target.complete();
      this.infiniteScroll.complete();

    }, 1000);
  }


}
