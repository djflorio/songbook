import { Component, OnInit,
  Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'sb-chord-word',
  templateUrl: './chord-word.component.html',
  styleUrls: ['./chord-word.component.css']
})
export class ChordWordComponent implements OnInit {
  @Input() lineNo;
  @Input() position;
  @Input() chord: string;
  @Input() word: string;
  @Input() editMode: boolean;

  @Output() onSpaceEnter = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.code == "Space") {
      event.preventDefault();
      this.onSpaceEnter.emit({ position: this.position, key: "space"});
    } else if (event.code == "Enter") {
      event.preventDefault();
      this.onSpaceEnter.emit({ key: "enter"});
    } else if (event.code == "Backspace") {
      if (event.target.innerText == "") {
        this.onDelete.emit({position: this.position});
      }
    }
  }

  onKeyUp(event) {
    
  }

  ngOnChanges() {
    console.log(this.word);
  }

}
