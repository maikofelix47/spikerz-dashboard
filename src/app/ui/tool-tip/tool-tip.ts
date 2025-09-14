import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-tip-text',
  templateUrl: './tool-tip.html',
  styleUrl: './tool-tip.scss',
  imports: [NgOptimizedImage],
})
export class ToolTipTextComponent {
  @Input() text = '';
  @Input() imgLink = '';
}
