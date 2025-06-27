import { Component, Input } from '@angular/core';
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { NgIf } from '@angular/common';
import { ClickLoggerDirective } from '../../directives/click-logger.directive';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [NgIf, CapitalizePipe, ClickLoggerDirective],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  // This component can be used to display individual hero details
 
  // It expects a hero object with id, name, and power properties
  // The hero object is optional, allowing for flexibility in usage
  // If no hero is provided, the component will not render anything 
  // This is useful for scenarios where the hero data might not be immediately available
  @Input() hero?: { id: number; name: string; power: string };
}
