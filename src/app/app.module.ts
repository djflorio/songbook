import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongComponent } from './song/song.component';
import { LineComponent } from './song/line/line.component';
import { ChordWordComponent } from './song/line/chord-word/chord-word.component';

import { SongService } from './song/song.service';

import { Focus } from './song/line/chord-word/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SongComponent,
    LineComponent,
    ChordWordComponent,
    Focus
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
