import { 
  Component, EventEmitter,
  OnInit, OnChanges,
  Input, Output,
  QueryList, ViewChildren,
  AfterViewInit
} from '@angular/core';

import { ChordWordComponent } from './chord-word/chord-word.component';

@Component({
  selector: 'sb-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() lineNo;
  @Input() words;
  @Input() chords;
  @Input() editMode;
  @Output() onAddLine = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    
  }

  onSpaceEnter(event) {
    if (event.key == "space") {
      this.words.splice(event.position + 1, 0, "");
      this.chords.splice(event.position + 1, 0, "");
    } else if (event.key == "enter") {
      this.onAddLine.emit(this.lineNo);
    }
  }

  onDeleteChordWord(event) {
    this.words.splice(event.position, 1);
    this.chords.splice(event.position, 1);
  }
}
