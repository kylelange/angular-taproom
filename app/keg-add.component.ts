import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector:"add-keg",
  template:`
  <div *ngIf="childSelectedKeg===null">
    <h3>New Keg:</h3>
    <div class="form-group">
      <label>Enter Keg Name: </label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Keg Brand: </label>
      <input #newBrand class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Pint Price: </label>
      <input #newPrice class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Keg ABV: </label>
      <input #newABV class="form-control">
    </div>
    <button (click)="
      addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newABV.value='';
    " class="btn form-control">Add Keg</button>
  </div>
  `
})

export class AddKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: number){
    if((name!=='')&&(brand!=='')&&(price>0)&&(abv>0)) {
      var newKegToAdd: Keg = new Keg(name, brand, price, abv);
      this.newKegSender.emit(newKegToAdd);
    } else {
      alert("You need to fill in all blanks to tap a keg, sober up and try again!");
    }
  }
}
