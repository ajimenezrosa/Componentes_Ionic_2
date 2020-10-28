import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.page.html',
  styleUrls: ['./searcher.page.scss'],
})
export class SearcherPage implements OnInit {

  constructor(private servicesCtrl: DataService) { }

  albumes: any[] = [];
  textoFiltrar: string = '';
  ngOnInit() {
  }

  onSearchChange(event) {

      this.textoFiltrar = event.detail.value;

      this.servicesCtrl.getAlbumes().subscribe(data => {
              this.albumes = data;
      });

  }

}
