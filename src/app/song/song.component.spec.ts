import { SongComponent } from './song.component';
import { SongService } from './song.service';

import { testSong, testSong_newLine } from './testsong';

describe('SongComponent', () => {
  let component: SongComponent;
  let service: SongService;

  beforeEach(() => {
    component = new SongComponent(service);
    component.song = testSong;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleEdit should toggle editMode property', () => {
    const startingValue = component.editMode;

    component.toggleEdit();

    expect(component.editMode).toBe(!startingValue);
  });

  it('#addLine should add empty line to song', () => {
    component.addLine({ section: 0, line: 1 });

    expect(component.song).toEqual(testSong_newLine);
  });
});
