import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {


  superhoroes: Observable<any>;

  textfiltro: string = '';

  constructor(private dataservic: DataService) { }

  ngOnInit() {
      this.superhoroes = this.dataservic.getHeroes();
    }

    filtrar(str: string) {
      this.textfiltro = str;
    }
    segmentChanged( event ) {
      console.log(event);
  }

}
