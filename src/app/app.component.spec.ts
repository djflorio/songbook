import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongComponent } from './song/song.component';
import { LineComponent } from './song/line/line.component';
import { ChordWordComponent } from './song/line/chord-word/chord-word.component';

import { SongService } from './song/song.service';

import { Focus } from './song/line/chord-word/focus.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SongComponent,
        LineComponent,
        ChordWordComponent,
        Focus
      ],
      providers: [SongService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
