import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';

import { SongService } from './song.service';

import { testSong } from './testsong';

describe('SongService', () => {
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      providers: [SongService]
    });
  });

  it('should be truthy', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));

  it('#getSong should return test song', inject([SongService], (service: SongService) => {
    expect(service.getSong()).toEqual(testSong);
  }));
});
