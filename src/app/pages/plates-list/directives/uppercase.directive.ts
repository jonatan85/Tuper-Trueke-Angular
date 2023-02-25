import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  
  @HostBinding('style.text-transform') textTransform?: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    console.log('HAS ENTRADO!');
    this.textTransform = 'uppercase';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('HAS SALIDO!');
    this.textTransform = undefined;
  }


}
