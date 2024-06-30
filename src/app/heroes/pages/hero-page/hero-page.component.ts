import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroElement } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, delay } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  hero?: HeroElement;

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.heroeService.getHeroById(params['id'])))
      .subscribe((hero) => {
        if (!hero) this.router.navigate(['/heroes/list']);
        this.hero = hero;
      });
  }

  goBack() {
    this.router.navigate(['heroes/list']);
  }
}
