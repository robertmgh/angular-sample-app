import { Component, OnInit, Inject } from '@angular/core';
import { Album } from 'src/app/core/models/album';
import { MusicSearchService } from '../../services/music-search.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  results: Album[] = []
  message = ''

  constructor(
    // @Inject(MusicSearchService)
    private service: MusicSearchService
  ) { }

  ngOnInit(): void {
    this.search('batman');
  }

  search(query: string) {

    this.service.getResults(query)
      .subscribe({
        next: (albums) => this.results = albums,
        error: (error) => { this.message = (error.message); },
        complete: () => { console.log('complete'); }
      });
  }
}
