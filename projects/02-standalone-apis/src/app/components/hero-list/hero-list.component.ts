import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HeroCardComponent } from "../hero-card/hero-card.component";
import { HeroService } from '../../../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [NgIf, NgFor, HeroCardComponent],
  providers: [
    HeroService,
  ],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})
export class HeroListComponent implements OnInit{

  #heroService = inject(HeroService);

  heroes = [
    { id: 1, name: 'Superman', power: 'Flight' },
    { id: 2, name: 'Batman', power: 'Intellect' },
    { id: 3, name: 'WonderWoman', power: 'Strength' },
    { id: 4, name: 'Flash', power: 'Speed' },
    { id: 5, name: 'Aquaman', power: 'Aquatic' },
    { id: 6, name: 'Green Lantern', power: 'Energy Projection' },
    { id: 7, name: 'Cyborg', power: 'Technology Manipulation' },
    { id: 8, name: 'Martian Manhunter', power: 'Shape-shifting' }
  ];
  
  ngOnInit(): void {
      
    console.log("Service", this.#heroService.name)
  }
   
}
