import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[newChartTab]'
})
export class NewChartTabDirective {
  constructor(public viewContainerRef : ViewContainerRef) { }
}
