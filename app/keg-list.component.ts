import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "list-kegs",
  template:`
  <div *ngFor="let currentKeg of childKegList">
    <h3>{{ currentKeg.brand }}: </h3>
    <h4>{{ currentKeg.name }} ({{ currentKeg.abv }}) ...$ {{ currentKeg.price }}</h4>
  </div>
  `
})

export class ListKegComponent {
  @Input() childKegList: Keg[];
}
