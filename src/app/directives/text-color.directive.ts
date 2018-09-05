import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#db293c';
  }

  @HostBinding('style.color') textColor = '#ccc';

  // @HostListener('click') doSomething() {
  //   alert('HostListener works');
  // }

  @HostListener('mouseenter') mouseOnEnter() {
    this.textColor = '#000';
    console.log('HostListener mouse entered');
  }

  @HostListener('mouseleave') mouseOnLeave() {
    this.textColor = '#db293c';
    console.log('HostListener mouse leaved');
  }
}
