import { ExternalUrls } from "./ExternalUrls";
import { Image } from "./Image";

export interface Artist {
  external_urls: ExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
