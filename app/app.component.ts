import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Chipped Flagon TapRoom</h1>
    <list-kegs></list-kegs>
    <add-keg></add-keg>
    <edit-keg></edit-keg>
  </div>
  `
})

export class AppComponent {

}
