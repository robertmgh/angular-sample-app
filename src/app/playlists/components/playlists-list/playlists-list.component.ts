import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { NgForOf, NgForOfContext } from '@angular/common';

NgForOf
NgForOfContext

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated,
  // inputs:['playlists:items'],
  // outputs:['selectedChange:selected']
})
export class PlaylistsListComponent implements OnInit {

  @Input('items') 
  playlists: Playlist[] = []
  
  @Output()
  selectedChange = new EventEmitter<Playlist>()

  @Input()
  selected?:Playlist
  
  select(p: Playlist) {
    this.selected = p
    this.selectedChange.emit(p)
  }

  constructor() { 
    // setInterval(()=>{
    //   this.playlists.unshift(this.playlists.pop()!)
    // },1000)
  }

  ngOnInit(): void {
  }

}
