import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
/*
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  isOpen = false;

  @HostListener('click') click(eventData: Event) {
    if  (this.isOpen == true) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.isOpen = false;
    }
    else {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.isOpen = true;
    }
  }

  */

  // alternative:

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  }

