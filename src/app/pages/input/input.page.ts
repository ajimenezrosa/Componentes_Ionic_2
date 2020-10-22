import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Alejandro';

  usuario = {
    email: '',
    password: ''

  }

  constructor() { }

  ngOnInit() {
  }


  onSubmit(formulario: ngForm) {
    
    // to get information from object.
    console.log("submit", this.usuario);

    //I can get informacion from the forms too.abs
    console.log(formulario);

  }

}
