// Generated by https://quicktype.io

import { 
  PagingObject, Artist, Copyright, ExternalIDS, ExternalUrls, Track, Image 
} from '.';

export interface ArtistSearchResults {
  artists: PagingObject<Artist>;
}

export interface AlbumSearchResults {
  albums: PagingObject<Album>;
}

export interface AlbumsResponse {
  albums: Album[];
}

export interface Album {
  album_type:             string;
  artists:                Artist[];
  available_markets:      string[];
  copyrights:             Copyright[];
  external_ids:           ExternalIDS;
  external_urls:          ExternalUrls;
  genres:                 any[];
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  popularity:             number;
  release_date:           string;
  release_date_precision: string;
  tracks:                 PagingObject<Track>;
  type:                   string;
  uri:                    string;
}