import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr />
    <app-css></app-css>
    <hr />
    <app-clases></app-clases>
    <hr />
    <p [appResaltado]="'orange'">
      Hola mundo
    </p>
    <hr />
    <p appResaltado>
      Hola mundo
    </p>
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    DoCheck {
  constructor() {
    console.log('Constructor');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
