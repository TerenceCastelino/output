import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './ExoOutput/parent/parent.component';
import { EnfantComponent } from './ExoOutput/enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
