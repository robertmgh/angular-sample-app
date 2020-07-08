import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  mode: 'show' | 'edit' | 'preview' = 'show'

  playlists: Playlist[] = [
    {
      id: 123,
      name: 'Best of Angular 2020',
      public: true,
      description: 'My favourite playlist',
    }, {
      id: 234,
      name: ' Angular Hits',
      public: false,
      description: 'I dont like this playlist',
    }, {
      id: 345,
      name: 'Angular Top20',
      public: true,
      description: 'Meh..',
    }
  ]

  selected?: Playlist = this.playlists[0]

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.mode = 'edit'
  }

  cancel() {
    this.mode = 'show'
  }

  save(draft: Playlist) {

    const index = this.playlists.findIndex(p => p.id == draft.id)
    if (index !== -1) {
      // this.playlists.splice(index, 1, draft)
      this.playlists[index] = draft
      this.selected = draft
      this.mode = 'show'
    }

  }
}
