import { JSONObject } from "../../shared";
import { EpisodeSimplified } from "../episode/episode.types";
import { Copyright, ExternalUrls, Image, PagingObject } from "../general.types";
import { Market } from "../market/market.types";

export interface ShowSimplified extends JSONObject {
  /**
   * A list of the countries in which the track can be played.
   */
  available_markets: Market[];
  /**
   * The copyright statements of the show.
   */
  copyrights: Copyright[];
  /**
   * The description of the show without html tags.
   */
  description: string;
  /**
   * The description of the show with html tags.
   */
  html_description: string;
  /**
   * Whether or not the show has explicit lyrics.
   */
  explicit: boolean;
  /**
   * External URLs for this show.
   */
  external_urls: ExternalUrls;
  /**
   * A link to the Web API endpoint providing full details of the show.
   */
  href: string;
  /**
   * The Spotify ID for the show.
   */
  id: string;
  /**
   * Images of the show in various sizes, widest first.
   */
  images: Image[];
  /**
   * True, if the episode is hosted outside of Spotify's CDN.
   */
  is_externally_hosted: boolean;
  /**
   * A list of the languages used in the episode, identified by their ISO 639-1 code.
   */
  languages: string[];
  /**
   * The media type of the show.
   */
  media_type: string;
  /**
   * The name of the episode.
   */
  name: string;
  /**
   * The publisher of the show.
   */
  publisher: string;
  /**
   * THe object type.
   */
  type: "show";
  /**
   * The Spotify URI for the show.
   */
  uri: string;
  /**
   * The total number of episodes in the show.
   */
  total_episodes: number;
}

export interface Show extends ShowSimplified, JSONObject {
  /**
   * The episodes of the show.
   */
  episodes: PagingObject<EpisodeSimplified>;
}
