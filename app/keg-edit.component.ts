import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "edit-keg",
  template:`
  <div *ngIf="childSelectedKeg">
    <h3>Edit Keg:</h3>
    <label>Edit Keg Name: </label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Edit Keg Brand: </label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>Edit Pint Price: </label>
    <input [(ngModel)]="childSelectedKeg.price">
    <label>Edit Keg ABV: </label>
    <input [(ngModel)]="childSelectedKeg.abv">
    <button (click)="updateClicked()">Update Keg</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() newKegEditor = new EventEmitter();
  updateClicked() {
    this.newKegEditor.emit();
  }
}
