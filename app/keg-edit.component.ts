import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: "edit-keg",
  template:`
  <div *ngIf="childSelectedKeg">
    <h3>Edit Keg:</h3>
    <div class="form-group">
      <label>Edit Keg Name: </label>
      <input [(ngModel)]="childSelectedKeg.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit Keg Brand: </label>
      <input [(ngModel)]="childSelectedKeg.brand" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit Pint Price: </label>
      <input [(ngModel)]="childSelectedKeg.price" class="form-control" type="number" min="0">
    </div>
    <div class="form-group">
      <label>Edit Keg ABV: </label>
      <input [(ngModel)]="childSelectedKeg.abv" class="form-control" type="number">
    </div>
    <button (click)="updateClicked()" class="btn form-control">Update Keg</button>
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
