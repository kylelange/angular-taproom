import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector:"add-keg",
  template:`
  <div>
    <h3>New Keg:</h3>
    <label>Enter Keg Name: </label>
    <input #newName>
    <label>Enter Keg Brand: </label>
    <input #newBrand>
    <label>Enter Pint Price: </label>
    <input #newPrice>
    <label>Enter Keg ABV: </label>
    <input #newABV>
    <button (click)="
      addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newABV.value='';
    ">Add Keg</button>
  </div>
  `
})

export class AddKegComponent {
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
