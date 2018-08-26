import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive ({
  selector: '[appHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  @Input () defaultColor = 'transparent';
  @Input () highlightColor = 'blue';

  @HostBinding ('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit () {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener ('mouseenter') mouseOver (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.backgroundColor = this.highlightColor;
  }

  @HostListener ('mouseleave') mouseLeave (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
  }

}
