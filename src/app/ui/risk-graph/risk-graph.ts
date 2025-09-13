import { Component, HostListener, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-risk-graph',
  styleUrl: './risk-graph.scss',
  templateUrl: './risk-graph.html',
  imports: [NgOptimizedImage, MatDivider, MatTooltipModule],
})
export class RiskGraphComponent {
  /*
  @ViewChild('tooltip') tooltip: any;
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // This method will be called whenever the mouse moves over the element
    // where this directive is applied.
    console.log('Mouse moved over image:', event.clientX, event.clientY);
    if (event.clientX === 754) {
      this.tooltip.show();
    }
  }
    */
}
