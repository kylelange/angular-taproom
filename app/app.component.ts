import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Chipped Flagon Tavern</h1>
    <div class="row">
      <div class="col-sm-6">
        <list-kegs
          [childKegList] = "masterKegList"
          (clickedKeg)="showDetails($event)"
        ></list-kegs>
      </div>
      <div class="col-sm-6">
        <add-keg
          (newKegSender) = "addKeg($event)"
        ></add-keg>
        <edit-keg
          [childSelectedKeg]="selectedKeg"
          (newKegEditor)="finishedUpdate()"
        ></edit-keg>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Belgian Strong Dark", "Pfriem", 5.95, .1),
    new Keg("La Fin Du Monde", "Unibroue", 7.50, .09),
    new Keg("Summer Lovin'", "Everybody's Brewing", 4, .048),
    new Keg("Bigfoot: Barleywine", "Sierra Navada", 7.25, .096),
    new Keg("Pabst Blue Ribbon", "Pabst Brewing Co.", .95, .0474)
  ];
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedUpdate() {
    this.selectedKeg = null;
  }
}
