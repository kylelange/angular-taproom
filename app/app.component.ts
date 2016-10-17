import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Chipped Flagon Tavern</h1>
    <list-kegs
      [childKegList] = "masterKegList"
    ></list-kegs>
    <add-keg></add-keg>
    <edit-keg></edit-keg>
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
}
