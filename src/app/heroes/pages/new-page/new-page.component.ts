import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {
publishers = [
  { id: 'DC-COMICS', value: 'DC-COMICS' },
  { id: 'MARVEL', value: 'MARVEL' }
]
}
