import { Track } from './Track';
import { Entity } from './Entity';

export interface Playlist extends Entity {
  public: boolean;
  description: string;
  tracks?: Track[]
}


