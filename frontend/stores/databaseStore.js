export const useDatabaseStore = defineStore("dataBaseStore", {
  state: () => ({
    playlist: false,
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
