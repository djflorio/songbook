import { Component, OnInit } from '@angular/core';

import { SongService } from './song.service';

@Component({
  selector: 'sb-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  song;
  editMode = false;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSong();
  }

  getSong() {
    this.song = this.songService.getSong();
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  addLine(e) {
    console.log(e);
    //this.chords.splice(i + 1, 0, "");
    //console.log(this.song.sections[e.section].lines[e.line]);
    this.song.sections[e.section].lines.splice(e.line + 1, 0, {
      chords: [""],
      words: [""]
    })
    console.log(this.song);
  }

}
