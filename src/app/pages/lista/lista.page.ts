import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

usuarios: Observable<any>;

@ViewChild(IonList) ionlist: IonList; 

  constructor(private dataServices: DataService) { }

      ngOnInit() {
        this.usuarios = this.dataServices.getUsuarios();
    }


        share(user){
          console.log('Share:' , user);
          this.ionlist.closeSlidingItems();
        }

        favorite(user) {
          console.log('Favorite:' , user);
          this.ionlist.closeSlidingItems();

        }
        trash(user) {

          console.log('delete:' , user);
          this.ionlist.closeSlidingItems();

        }

}
