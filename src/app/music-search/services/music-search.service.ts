import { Injectable, Inject } from '@angular/core';
import { Album, AlbumSearchResults } from 'src/app/core/models/album';
import { SEARCH_API_URL } from './tokens';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription, from, EMPTY, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/security/auth.service';

import { map, pluck, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
  // providedIn: MusicSearchModule
})
export class MusicSearchService {
  results: Album[] = mock as any

  constructor(
    @Inject(SEARCH_API_URL) private api_url: string,
    private http: HttpClient,
  ) { }

  getResults(query: string) {

    return this.http.get<AlbumSearchResults>(this.api_url, {
      params: {
        q: query,
        type: 'album'
      },
    }).pipe(
      map((res) => res.albums.items)
    )
  }
}


export const mock = [
  {
    id: '123',
    name: 'Test Album ABC',
    images: [
      { url: 'https://www.placecage.com/c/300/300' }
    ]
  },
  {
    id: '123',
    name: 'Test Album 234',
    images: [
      { url: 'https://www.placecage.com/c/300/300' }
    ]
  },
  {
    id: '123',
    name: 'Test Album ZZZ',
    images: [
      { url: 'https://www.placecage.com/c/300/300' }
    ]
  }
] as Partial<Album>[]