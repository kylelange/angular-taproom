import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "list-kegs",
  template:`
  <div class="row">
    <div class="col-xs-6 col-xs-offset-2">
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value = "All" selected="selected">Show All Kegs</option>
        <option value = "is Empty">Show Empty Kegs</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentKeg of childKegList | emptiness:selectedEmptiness" class="row">
    <div class="col-xs-2">
      <img *ngIf="currentKeg.price<4.50" src="build/images/cheap.png" class="img-responsive" />
      <img *ngIf="currentKeg.price>6.50" src="build/images/premium.png" class="img-responsive" />
    </div>
    <div class="col-xs-10">
      <h3 *ngIf="currentKeg.abv>=.05" (click)="selectKeg(currentKeg)" class="heavy">{{ currentKeg.brand }}: {{ currentKeg.pints }}</h3>
      <h3 *ngIf="currentKeg.abv<.05" (click)="selectKeg(currentKeg)" class="light">{{ currentKeg.brand }}: {{ currentKeg.pints }}</h3>
      <h4>{{ currentKeg.name }} ({{ currentKeg.abv | percent }}) ...... {{ currentKeg.price | currency:'USD':true:'1.2-2' }}</h4>
      <p (click)="currentKeg.dispensePint()">Dispense Pint</p>
    </div>
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
