import { ChordWordComponent } from './chord-word.component';

describe('ChordWordComponent', () => {
  let component: ChordWordComponent;

  beforeEach(() => {
    component = new ChordWordComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onKeydown space should emit position and key', (done) => {
    const event = new KeyboardEvent("keydown", { code: "Space" });
    component.position = 2;

    component.onSpaceEnter.subscribe(g => {
      expect(g).toEqual({ position: 2, key: "space" });
      done();
    });

    component.onKeydown(event);
  });
  
  it('#onKeydown enter should emit position and key', (done) => {
    const event = new KeyboardEvent("keydown", { code: "Enter" });

    component.onSpaceEnter.subscribe(g => {
      expect(g).toEqual({ key: "enter" });
      done();
    });

    component.onKeydown(event);
  });

  it('#onKeydown backspace should emit position and key if empty', (done) => {
    const event = new KeyboardEvent("keydown", { code: "Backspace" });
    component.position = 2;

    component.onDelete.subscribe(g => {
      expect(g).toEqual({ position: 2 });
      done();
    });

    component.onKeydown(event);
  });
});
