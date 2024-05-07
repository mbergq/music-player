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
      console.log("data", data);
      const album = data.find((album) => album.albumTitle === url);
      console.log("album", album);
      console.log("album.albumCoverUrl", album.albumCoverUrl);
      this.currentCoverUrl = album.albumCoverUrl;
    },

    setCurrentTrackPlaying(track, file, actName, coverUrl) {
      console.log("setCurrentTrackPlaying", track, file, actName, coverUrl);

    async trackInfo() {
      const data = await $fetch("http://localhost:3001/api/tracksDetails");

      this.tracks = data;
    },

    async allFavorites() {
      const data = await $fetch("http://localhost:3001/api/favorite/all/true");

      this.favorites = data;
    },
    setCurrentTrackPlaying(track, file, actName) {

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
