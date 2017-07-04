import { LineComponent } from './line.component';

describe('LineComponent', () => {
  let component: LineComponent;

  beforeEach(() => {
    component = new LineComponent();
    component.words = ["I", "am", "a", "legend"];
    component.chords = ["C", "D", "", "G"];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSpaceEnter should add chord-word at proper location with space', () => {
    const event = { position: 2, key: "space" };
    const wordsShouldBe = ["I", "am", "a", "", "legend"];
    const chordsShouldBe = ["C", "D", "", "", "G"];

    component.onSpaceEnter(event);

    expect(component.words).toEqual(wordsShouldBe);
    expect(component.chords).toEqual(chordsShouldBe);
  });

  it('#onSpaceEnter should output section and line # with enter', (done) => {
    const event = { position: 1, key: "enter" };
    component.lineNo = { section: 1, line: 1 }
    component.onAddLine.subscribe(g => {
      expect(g).toEqual({ section: 1, line: 1 });
      done();
    });

    component.onSpaceEnter(event);
  });
});
