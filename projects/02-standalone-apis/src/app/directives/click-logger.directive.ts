import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
  standalone: true
})
export class ClickLoggerDirective {

  @HostListener('click')
  logClick(): void {
    console.log('Element clicked!');
  }

}
