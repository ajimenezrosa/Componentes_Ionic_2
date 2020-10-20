import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {


  imagen: string = 'https://avatars1.githubusercontent.com/u/7384546?s=460&u=fcb925c7ff90e6947e1ee3597749d846b211aecf&v=4';
  constructor() { }

  ngOnInit() {
  }

}
