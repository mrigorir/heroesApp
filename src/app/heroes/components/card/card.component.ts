import { Component, OnInit, Input } from '@angular/core';
import { HeroElement } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-heroe-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {
  @Input()
  hero!:HeroElement;

  ngOnInit(): void {
    if(!this.hero) throw Error('Missing hero property');
  }
}
