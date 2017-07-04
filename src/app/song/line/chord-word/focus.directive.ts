import { 
    Directive, Renderer, 
    ElementRef, OnInit
} from '@angular/core';

@Directive({
  selector: 'sb-focus'
})
export class Focus implements OnInit {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngOnInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }
}