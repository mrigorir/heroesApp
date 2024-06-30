import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroElement } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  searchInput = new FormControl('');
  heroes: HeroElement[] = [];
  SelectedHero?: HeroElement;

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent):void {
    if (!event.option.value) {
        this.SelectedHero = undefined;
        return;
    }
    const hero: HeroElement = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.SelectedHero = hero;
  }
}
