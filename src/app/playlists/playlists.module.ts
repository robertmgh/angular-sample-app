import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './views/playlists/playlists.component';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { PlaylistsListItemComponent } from './components/playlists-list-item/playlists-list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistsListItemComponent,
    PlaylistDetailsComponent,
    PlaylistFormComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ]
})
export class PlaylistsModule { }
