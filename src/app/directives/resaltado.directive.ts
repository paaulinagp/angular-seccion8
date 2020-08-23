import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
  }

  @HostListener('mouseenter') mouseEntro(): void {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(): void {
    this.resaltar(null);
  }

  private resaltar(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
