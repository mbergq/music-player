export const useDatabaseStore = defineStore("dataBaseStore", {
  state: () => ({
    playlist: false,
    currentTrackPlaying: "",
    currentFilePlaying: "",
    currentActName: "",
  }),

  actions: {
    setCurrentTrackPlaying(track, file, actName) {
      this.currentTrackPlaying = track;
      this.currentFilePlaying = file;
      this.currentActName = actName;
    },
    resetTrackPlaying() {
      this.currentFilePlaying = "";
    },
  },
});
