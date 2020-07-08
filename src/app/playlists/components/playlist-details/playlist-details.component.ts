import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { NgStyle, NgClass } from '@angular/common';
// NgClass
// NgStyle

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input()
  playlist!: Playlist

  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editClick(){
    this.edit.emit()
  }

}
