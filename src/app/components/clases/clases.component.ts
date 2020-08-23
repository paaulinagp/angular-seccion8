import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [],
})
export class ClasesComponent implements OnInit {
  alert: string = 'alert-danger';

  propiedades: any = {
    danger: false,
  };

  loader: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ejecturar(): void {
    console.log('si entro');
    this.loader = true;

    setTimeout(() => (this.loader = false), 3000);
  }
}
