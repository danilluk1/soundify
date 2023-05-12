import { HTTPClient } from "../client";
import { Market } from "../market";

export const getPlaybackState = async (
  client: HTTPClient,
  market?: Market,
  additional_types: string[] = ["track"]
) => {
  return await client.fetch<>;
};
