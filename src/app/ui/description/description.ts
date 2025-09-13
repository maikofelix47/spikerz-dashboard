import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  styleUrl: './description.scss',
  templateUrl: './description.html',
})
export class DescriptionComponent {
  @Input({ required: true }) title = '';
}
