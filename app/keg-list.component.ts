import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "list-kegs",
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
    <option value = "All" selected="selected">Show All Kegs</option>
    <option value = "is Empty">Show Empty Kegs</option>
  </select>
  <div *ngFor="let currentKeg of childKegList | emptiness:selectedEmptiness">
    <h3 (click)="selectKeg(currentKeg)">{{ currentKeg.brand }}: {{ currentKeg.pints }}</h3>
    <h4>{{ currentKeg.name }} ({{ currentKeg.abv }}) ...$ {{ currentKeg.price }}</h4>
    <p (click)="currentKeg.dispensePint()">Dispense Pint</p>
  </div>
  `
})

export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickedKeg = new EventEmitter();
  public selectedEmptiness: string = "All";
  onChange(optionFromMenu) {
    this.selectedEmptiness = optionFromMenu;
    //console.log(this.selectedEmptiness)
  }
  selectKeg(kegToEdit: Keg) {
    this.clickedKeg.emit(kegToEdit);
  }
}
