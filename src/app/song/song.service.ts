import { Injectable } from '@angular/core';

import { testSong } from './testsong';

@Injectable()
export class SongService {
  
  constructor() { }
  
  getSong() {
    return testSong;
  }
}
