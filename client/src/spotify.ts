import axios from "axios";

// Keys used to retrieve data from local storage
const KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expireTime: "spotify_token_expire_time",
  timestamp: "spotify_token_timestamp",
};

// local storage values
const VALUES = {
  accessToken: window.localStorage.getItem(KEYS.accessToken),
  refreshToken: window.localStorage.getItem(KEYS.refreshToken),
  expireTime: window.localStorage.getItem(KEYS.expireTime),
  timestamp: window.localStorage.getItem(KEYS.timestamp),
};

/**
 * Checks if elapsed time between current time and timestamp stored in local storage is greater
 * than the expiration time
 * @return true If the acces token has expired
 */
function hasTokenExpired(): boolean {
  const { accessToken, timestamp, expireTime } = VALUES;
  if (!accessToken || !timestamp) return false;

  // Amount of time in milliseconds
  const elapsed = Date.now() - Number(timestamp);
  return elapsed / 1000 > Number(expireTime);
}

/**
 * Clear local storage items and reload the page
 */
export function logout() {
  for (const prop in KEYS)
    window.localStorage.removeItem(KEYS[prop as keyof typeof KEYS]);

  // Go to homepage
  const win: Window = window;
  win.location = window.location.origin;
}

/**
 * Use of /refresh_token endpoint to retrieve a new token for the app
 */
async function refreshToken(): Promise<void> {
  try {
    if (
      !VALUES.refreshToken ||
      VALUES.refreshToken === "undefined" ||
      Date.now() - Number(VALUES.timestamp) < 1000
    ) {
      console.error("No refresh token available");
      logout();
    }

    // Use /refresh_token from backend
    const { data } = await axios.get(
      `/api/refresh_token?refresh_token=${VALUES.refreshToken}`
    );

    // Update local storage
    window.localStorage.setItem(KEYS.accessToken, data.access_token);
    window.localStorage.setItem(KEYS.timestamp, Date.now().toString());

    // Take in count local storage changes by reloading the page
    window.location.reload();
  } catch (e) {
    console.error(e);
  }
}

/**
 * Retrieve user's Spotify access token from local storage
 * @return Spotify access token
 */
function getAccessToken(): string | null {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);
  const queryParams = {
    [KEYS.accessToken]: params.get("access_token"),
    [KEYS.refreshToken]: params.get("refresh_token"),
    [KEYS.expireTime]: params.get("expires_in"),
  };

  const hasError = params.get("error") ? true : false;

  if (hasError || hasTokenExpired() || VALUES.accessToken === "undefined")
    refreshToken();

  if (VALUES.accessToken && VALUES.accessToken !== "undefined")
    return VALUES.accessToken;

  if (queryParams[KEYS.accessToken]) {
    for (const prop in queryParams)
      window.localStorage.setItem(prop, queryParams[prop]!);

    window.localStorage.setItem(KEYS.timestamp, Date.now().toString());

    return queryParams[KEYS.accessToken];
  }

  return "";
}

export const accessToken = getAccessToken();

// Setting Axios configurations for future requests
axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
axios.defaults.headers["Content-Type"] = "application/json";

/**
 * Get current User's profile
 * - Name
 * - Followers
 * - Artists followed
 */
export async function getUserProfile() {
  const { data } = await axios.get("/me");

  let result = await axios.get("/me/following?type=artist");
  data.following = result.data.artists.items.length;

  return data;
}

export async function getUserPlaylists(limit = 20) {
  const { data } = await axios.get(`/me/playlists?limit=${limit}`);
  return data;
}

/**
 * Retrieve user's top artists list
 * 
 * Parameter values :
 * - short_term (default)
 * - medium_term
 * - long_term
 * @param time_range Over what time frame the affinities are computed.
 */
export async function getUserTopArtists(time_range = "short_term") {
  const { data } = await axios.get(`/me/top/artists?time_range=${time_range}`);
  return data;
}
