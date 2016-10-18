import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "list-kegs",
  template:`
  <div *ngFor="let currentKeg of childKegList">
    <h3 (click)="selectKeg(currentKeg)">{{ currentKeg.brand }}: </h3>
    <h4>{{ currentKeg.name }} ({{ currentKeg.abv }}) ...$ {{ currentKeg.price }}</h4>
  </div>
  `
})

export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickedKeg = new EventEmitter();
  selectKeg(kegToEdit: Keg) {
    this.clickedKeg.emit(kegToEdit);
  }
}
