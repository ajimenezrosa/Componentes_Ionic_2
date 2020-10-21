import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {

  data = [
      {
          name: 'primary',
          selected: false

      },
      {
          name: 'secondary',
          selected: true

      },
      {
          name: 'tertiary',
          selected: false

      },
      {
          name: 'success',
          selected: true

      }

  ]


  constructor() { }

  ngOnInit() {
  }

  onClick(item: any) {
    console.log(item);
  }

  VerData(data) {
    console.log(data);
  }

}
