export const useDatabaseStore = defineStore("dataBaseStore", {
  state: () => ({
    playlist: false,
    tracks: [],
    favorites: [],
    currentTrackPlaying: "",
    currentFilePlaying: "",
    currentActName: "",
    currentCoverUrl: "",
  }),

  actions: {
    async findAlbumCoverUrl(url) {
      console.log("findAlbumCoverUrl", url);
      const data = await $fetch("http://localhost:3001/api/albums");
      const album = data.find((album) => album.albumTitle === url);
      this.currentCoverUrl = album.albumCoverUrl;
    },

    async trackInfo() {
      const data = await $fetch("http://localhost:3001/api/tracksDetails");

      this.tracks = data;
    },

    async allFavorites() {
      const data = await $fetch("http://localhost:3001/api/favorite/all/true");

      this.favorites = data;
    },
    setCurrentTrackPlaying(track, file, actName, coverUrl) {
      console.log("setCurrentTrackPlaying", track, file, actName, coverUrl);
      this.currentTrackPlaying = track;
      this.currentFilePlaying = file;
      this.currentActName = actName;
      this.findAlbumCoverUrl(coverUrl);
    },
    resetTrackPlaying() {
      this.currentFilePlaying = "";
    },
  },
});
