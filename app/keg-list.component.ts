import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "list-kegs",
  template:`
  <div *ngFor="let currentKeg of childKegList">
    <h3>{{ currentKeg.brand }}: {{ currentKeg.name }} ({{ currentKeg.abv }}) ...$ {{ currentKeg.price }}</h3>
  </div>
  `
})

export class ListKegComponent {
  @Input() childKegList: Keg[];
}
