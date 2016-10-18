import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ListKegComponent } from './keg-list.component';
import { EditKegComponent } from './keg-edit.component';
import { AddKegComponent } from './keg-add.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListKegComponent,
    EditKegComponent,
    AddKegComponent,
    EmptinessPipe,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
