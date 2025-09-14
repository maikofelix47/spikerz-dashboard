import { Component, HostListener, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolTipTextComponent } from '../tool-tip/tool-tip';

@Component({
  selector: 'app-risk-graph',
  styleUrl: './risk-graph.scss',
  templateUrl: './risk-graph.html',
  imports: [
    NgOptimizedImage,
    MatDivider,
    MatTooltipModule,
    ToolTipTextComponent,
  ],
})
export class RiskGraphComponent {}
