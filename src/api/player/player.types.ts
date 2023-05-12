import { JSONObject } from "src/shared";
import { Track } from "../track";
import { Episode } from "../episode";
import { ExternalUrls } from "../general.types";

export interface PlaybackState extends JSONObject {
  /**
   * The device that is currently active.
   */
  device: Device;
  /**
   * off, track, context
   */
  repeat_state: string;
  /**
   * If shufffle is on or off.
   */
  shuffle_state: boolean;
  /**
   * A Context object.
   */
  context: Context | null;
  /**
   * Unix Millisecond Timestamp when data wasa fetched.
   */
  timestamp: number;
  /**
   * Progress into the currently playing track or episode.
   */
  progress_ms: number | null;
  /**
   * If something is currently playing.
   */
  is_playing: boolean;
  /**
   * The currently playing track or episode.
   */
  item: Track | Episode | null;
  /**
   * The object type of the currently playing item.
   */
  currently_playing_type: "track" | "epsiode" | "ad" | "unknown";
  /**
   * Allows to update the use interface based on which playback actions are available within the current context.
   */
  actions: Actions;
}

export interface Device extends JSONObject {
  /**
   * The device ID.
   */
  id: string | null;
  /**
   * If this device is the currently active device.
   */
  is_active: boolean;
  /**
   * If this device is currently in a private session.
   */
  is_private_session: boolean;
  /**
   * Whether controlling this device is restricted.
   * At present if this is "true" then no Web API commands will be accepted by this device.
   */
  is_restricted: boolean;
  /**
   * A human-readable name for the device.
   * Some devices have a name that the use can configure and some devices have a generic name associated with the manufacturer or device model.
   */
  name: string;
  /**
   * Device type.
   */
  type: "computer" | "smatphone" | "speaker";
  /**
   * The current volume in percent.
   */
  volume_percent: number | null;
  /**
   * off, track, context.
   */
  repeat_state: string;
  /**
   * If shuffle is on or off.
   */
  shuffle_state: boolean;
}

export interface Context extends JSONObject {
  /**
   * The object type.
   */
  type: "artist" | "playlist" | "album" | "show";
  /**
   * A link to the Web API endpoint providing full details of the context.
   */
  href: string;
  /**
   * External URLs for this context.
   */
  external_urls: ExternalUrls;
  /**
   * The Spotify URI for the context.
   */
  uri: string;
}

export interface Actions extends JSONObject {
  /**
   * Interrupting playback.
   */
  interrupting_playback?: boolean;
  /**
   * Pausing.
   */
  pausing?: boolean;
  /**
   * Resuming.
   */
  resuming?: boolean;
  /**
   * Seeking playback location.
   */
  seeking?: boolean;
  /**
   * Skipping to the next context.
   */
  skipping_next?: boolean;
  /**
   * Skipping to the previous context.
   */
  skipping_prev?: boolean;
  /**
   * Toggiling repeat context flag.
   */
  toggling_repeat_context?: boolean;
  /**
   * Toggiling shuffle flag.
   */
  toggling_shuffle?: boolean;
  /**
   * Toggling repeat track.
   */
  toggling_repeat_track?: boolean;
  /**
   * Transfering playback between devices.
   */
  transferring_playback?: boolean;
}
