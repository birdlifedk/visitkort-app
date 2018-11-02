import { Component, Input } from '@angular/core';
import { VCard } from '../VCard';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent  {
  @Input() card: VCard; 
}
