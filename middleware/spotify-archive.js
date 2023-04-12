const SPOTIFY_ARCHIVE_URL = 'http://localhost:4000';

export const authorize = async () => {
  try {
    const response = await fetch(`${SPOTIFY_ARCHIVE_URL}/authorize-url`);
    const url = await response.text();
    window.location.href = url;
  } catch (error) {
    console.error(error);
  }
};

export const getTokens = async (authCode) => {
  try {
    const response = await fetch(`${SPOTIFY_ARCHIVE_URL}/tokens?code=${authCode}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getRefreshedAccessToken = async (accessToken, refreshToken) => {
  try {
    const response = await fetch(
      `${SPOTIFY_ARCHIVE_URL}/refresh-access-token?accessToken=${accessToken}&refreshToken=${refreshToken}`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const authFetch = async (path, accessToken, method, body = undefined, headers = {}) => {
  if (!accessToken) {
    console.warn('No accessToken!');
    authorize();
    return undefined;
  }
  try {
    const response = await fetch(`${SPOTIFY_ARCHIVE_URL}/${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
      body,
    });
    if (response.status === 401) {
      console.warn('Unauthorized!');
      authorize();
      return undefined;
    }
    if (response.status === 403) {
      console.warn('Forbidden!');
      return undefined;
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const authGet = (path, accessToken) => {
  return authFetch(path, accessToken, 'GET');
};

const authPost = (path, accessToken, body = {}) => {
  return authFetch(path, accessToken, 'POST', JSON.stringify(body), {
    'Content-Type': 'application/json;charset=UTF-8',
  });
};

export const fetchMyProfile = (accessToken) => {
  return authGet('my-profile', accessToken);
};

export const fetchMyPlaylists = (accessToken) => {
  return authGet('my-playlists', accessToken);
};

export const fetchMyArchive = (accessToken) => {
  return authGet('my-archive', accessToken);
};

export const fetchIndexedSavedTracks = (accessToken) => {
  return authGet('indexed-saved-tracks', accessToken);
};

export const indexSavedTracks = (accessToken) => {
  return authPost('indexed-saved-tracks', accessToken);
};

export const provideArchivePlaylist = (accessToken, playlistId) => {
  return authPost('my-archive', accessToken, { playlistId });
};

export const archiveRemovedTracks = (accessToken) => {
  return authPost('archive-removed-tracks', accessToken);
};
