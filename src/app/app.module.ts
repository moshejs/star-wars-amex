import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import {CharacterResolver} from './services/character.resolver';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import {CharactersComponent} from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    ErrorComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule
  ],
  providers: [CharacterResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
