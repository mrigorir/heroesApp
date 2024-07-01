import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroElement } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  publishers = [
    { id: 'DC-COMICS', value: 'DC-COMICS' },
    { id: 'MARVEL', value: 'MARVEL' },
  ];

  heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl(''),
    publisher: new FormControl(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  get currentHero(): HeroElement {
    const hero = this.heroForm.value as HeroElement;
    return hero;
  }

  ngOnInit(): void {
    if (this.router.url.includes('edit')) return;

    this.activatedRoute.params.pipe(
      switchMap(( params ) => this.heroesService.getHeroById(params['id']))
    ).subscribe(hero => {
      if (!hero) this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
    })
  }

  onSubmit() {
    if (!this.heroForm.valid) return;
    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {});
      return;
    }
    this.heroesService.addHero(this.currentHero).subscribe((hero) => {});
  }
}
