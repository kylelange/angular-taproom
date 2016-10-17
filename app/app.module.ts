import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ListKegComponent } from './keg-list.component';
import { EditKegComponent } from './keg-edit.component';
import { AddKegComponent } from './keg-add.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ListKegComponent,
    EditKegComponent,
    AddKegComponent,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
