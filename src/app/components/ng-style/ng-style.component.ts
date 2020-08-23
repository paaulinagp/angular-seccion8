import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': '30px' }">
      Hola mundo
    </p>
    <p [style.fontSize.px]="size">
      Hola mundo 2
    </p>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      (click)="size = size + 5"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-plus"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
        />
      </svg>
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm"
      (click)="size = size - 5"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-file-minus"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
        />
        <path
          fill-rule="evenodd"
          d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  size: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
