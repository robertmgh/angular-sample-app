import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicSearchRoutingModule } from './music-search-routing.module';
import { MusicSearchComponent } from './views/music-search/music-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { environment } from 'src/environments/environment';
import { SEARCH_API_URL } from './services/tokens';
import { MusicSearchService } from './services/music-search.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    AlbumCardComponent
  ],
  imports: [
    // FormsModule,
    ReactiveFormsModule,
    // HttpClientModule, // moved to root
    CommonModule,
    MusicSearchRoutingModule
  ],
  providers: [
    // {
    //   provide:HttpClient,
    //   useClass: HttpClientWithAuthAndErrorHandline
    // },
    {
      provide: SEARCH_API_URL,
      useValue: environment.music.search_url
    },
    // {
    //   provide: MusicSearchService,
    //   useFactory(url: string) {
    //     return new MusicSearchService(url)
    //   },
    //   deps: [SEARCH_API_URL/* ,B,C */]
    // },
    // {
    //   provide: MusicSearchService,
    //   useClass: MockMusicSearchService,
    //   // deps: [SEARCH_API_URL/* ,B,C */]
    // },
    // {
    //   provide:MusicSearchService,
    //   useClass:MusicSearchService
    // },
    MusicSearchService,
  ]
})
export class MusicSearchModule { }

