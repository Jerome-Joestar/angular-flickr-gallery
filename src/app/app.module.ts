import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MaterialModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { SearchComponent } from './filter-bar/search/search.component';
import { FilterComponent } from './filter-bar/filter/filter.component';
import { GridComponent } from './filter-bar/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    SearchComponent,
    FilterComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MdToolbarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
