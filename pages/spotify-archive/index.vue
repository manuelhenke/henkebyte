<template comments>
  <div id="page">
    <!-- #page -->
    <TheTitle badge-text="Closed Beta">Spotify Archive</TheTitle>
    <TheLead>
      An automation to add songs to an archive playlist which are removed from the users liked
      songs.
    </TheLead>

    <hr class="my-4" />

    <div v-if="isAuthorizationLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="!isAuthorized" class="vstack gap-2 col-md-5 mx-auto">
      <div v-if="isAccessDenied" class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Access Denied!</h4>
        <p class="mb-0">Please try again or contact us.</p>
      </div>
      <p class="text-center">
        In order to use this functionality, you need to authorize this application to access your
        Spotify data.
      </p>
      <button type="button" class="btn btn-primary" @click="authorize">Authorize</button>
    </div>
    <div v-else>
      <h2>Dashboard</h2>
      <div class="row flex-column-reverse flex-md-row gx-1 gy-2">
        <div class="col-12 col-md-6">
          <ul>
            <li>
              Liked Songs indexed
              <span v-if="hasIndexedSavedTracks">
                <i class="bi bi-check-circle text-success"></i><br />
                <span class="text-muted">{{ indexedSavedTracks.length }} Songs</span>
              </span>
              <i v-else class="bi bi-x-circle text-danger"></i>
            </li>
            <li>
              Archive playlist provided
              <span v-if="hasArchivePlaylistProvided">
                <i class="bi bi-check-circle text-success"></i><br />
                <a :href="myArchive?.external_urls?.spotify" target="_blank">{{
                  myArchive.name
                }}</a>
              </span>
              <i v-else class="bi bi-x-circle text-danger"></i>
            </li>
          </ul>
          <LoadingButton
            v-if="!hasIndexedSavedTracks"
            :loading="isPerformingBackendAction"
            :disabled="!myProfile"
            @click="indexSavedTracks"
          >
            Index saved Tracks
          </LoadingButton>
          <LoadingButton
            v-else-if="!hasArchivePlaylistProvided"
            :loading="isPerformingBackendAction"
            :disabled="!myPlaylists?.length"
            @click="provideArchivePlaylist"
          >
            Provide archive playlist
          </LoadingButton>
          <LoadingButton v-else :loading="isPerformingBackendAction" @click="archiveRemovedTracks">
            Archive removed tracks
          </LoadingButton>
        </div>
        <div class="col-12 col-md-6">
          <div v-if="myProfile" class="card">
            <div class="row g-0">
              <div class="col-sm-4">
                <img
                  v-if="myProfileImage"
                  :src="myProfileImage.url"
                  class="img-fluid rounded-start w-100"
                  style="max-height: 200px; object-fit: cover"
                  alt="Profile image"
                />
              </div>

              <div class="col-sm-8">
                <div class="card-body d-flex flex-column h-100">
                  <h5 v-if="myProfile.display_name" class="card-title">
                    {{ myProfile.display_name }}
                  </h5>
                  <div class="mt-auto d-flex flex-column flex-sm-row gap-1">
                    <button type="button" class="btn btn-text" @click="logout">Logout</button
                    ><a
                      v-if="myProfile.external_urls?.spotify"
                      class="btn btn-secondary blank-icon"
                      :href="myProfile.external_urls.spotify"
                      role="button"
                      target="_blank"
                      >Visit profile</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="myProfileFetchingFailed" class="alert alert-warning" role="alert">
            <h4 class="alert-heading">Access Denied!</h4>
            <p>
              You are not enrolled in the closed beta. Please contact
              <a
                href="mailto:spotify-archive@henkebyte.com?subject=Spotify Archive Enrollment&body=Name:%0D%0AEmail Address:"
                target="_blank"
                >spotify-archive@henkebyte.com</a
              >
              for an enrollment.
            </p>
            <button type="button" class="btn btn-secondary" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /#page -->
  </div>
</template>

<script>
import {
  authorize,
  indexSavedTracks,
  provideArchivePlaylist,
  archiveRemovedTracks,
  fetchMyPlaylists,
  fetchMyProfile,
  getTokens,
  fetchMyArchive,
  fetchIndexedSavedTracks,
} from '@/middleware/spotify-archive.js';
import globalEventNames from '@/util/global-event-names.js';

const { DISPLAY_NOTIFICATION } = globalEventNames;

export default {
  name: 'SpotifyArchive',
  layout: 'default',
  data: () => ({
    myProfile: undefined,
    myProfileFetchingFailed: false,
    myPlaylists: [],
    indexedSavedTracks: [],
    myArchive: undefined,
    isPerformingBackendAction: false,
  }),
  async fetch() {
    if (this.authCode) {
      const tokens = await getTokens(this.authCode);
      if (!tokens) {
        console.error(new Error('No tokens'));
      }
      console.log({ tokens });
      this.$store.dispatch('spotifyArchive/setTokens', {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
      });

      const query = { ...this.$route.query };
      delete query.code;
      this.$router.replace({ query });
    }
  },
  computed: {
    isAccessDenied() {
      return this.$route.query.error === 'access_denied';
    },
    isAuthorized() {
      return !!this.accessToken;
    },
    isAuthorizationLoading() {
      return this.authCode && !this.accessToken;
    },
    authCode() {
      return this.$route.query.code;
    },
    accessToken() {
      return this.$store.getters['spotifyArchive/accessToken'];
    },
    refreshToken() {
      return this.$store.getters['spotifyArchive/refreshToken'];
    },
    myProfileImage() {
      return this.myProfile?.images?.find((image) => image.url);
    },
    hasIndexedSavedTracks() {
      return this.indexedSavedTracks?.length > 0;
    },
    hasArchivePlaylistProvided() {
      return this.myArchive;
    },
  },
  watch: {
    isAuthorized(isNowAuthorized, wasAuthorized) {
      if (!wasAuthorized && isNowAuthorized) {
        this.init();
      }
    },
  },
  mounted() {
    if (this.accessToken) {
      this.init();
    }
  },
  methods: {
    authorize,
    init() {
      this.fetchMyProfile();
      this.fetchMyPlaylists();
      this.fetchIndexedSavedTracks();
      this.fetchMyArchive();
    },
    async fetchMyProfile() {
      const myProfile = await fetchMyProfile(this.accessToken);
      console.debug({ myProfile });
      if (myProfile) {
        this.myProfile = myProfile;
      } else {
        this.myProfileFetchingFailed = true;
      }
    },
    async fetchMyPlaylists() {
      const myPlaylists = await fetchMyPlaylists(this.accessToken);
      console.debug({ myPlaylists });
      if (myPlaylists) {
        this.myPlaylists = myPlaylists;
      }
    },
    async fetchIndexedSavedTracks() {
      const indexedSavedTracks = await fetchIndexedSavedTracks(this.accessToken);
      console.debug({ indexedSavedTracks });
      if (indexedSavedTracks) {
        this.indexedSavedTracks = indexedSavedTracks;
      }
    },
    async fetchMyArchive() {
      const myArchive = await fetchMyArchive(this.accessToken);
      console.debug({ myArchive });
      if (myArchive) {
        this.myArchive = myArchive;
      }
    },
    async indexSavedTracks() {
      this.isPerformingBackendAction = true;
      this.indexedSavedTracks = await indexSavedTracks(this.accessToken);
      this.isPerformingBackendAction = false;
    },
    async provideArchivePlaylist() {
      this.isPerformingBackendAction = true;
      // eslint-disable-next-line no-secrets/no-secrets
      this.myArchive = await provideArchivePlaylist(this.accessToken, '5aMaUC8hnXSoS6SIiGa2pr');
      this.isPerformingBackendAction = false;
    },
    async archiveRemovedTracks() {
      this.isPerformingBackendAction = true;
      const archivedTracks = await archiveRemovedTracks(this.accessToken);
      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: 'archived-tracks',
        body: `${archivedTracks.length} song${
          archivedTracks.length === 1 ? '' : 's'
        } has been archived!`,
      });
      this.isPerformingBackendAction = false;
    },
    logout() {
      this.$store.dispatch('spotifyArchive/setTokens', {
        accessToken: undefined,
        refreshToken: undefined,
      });
    },
  },
};
</script>
