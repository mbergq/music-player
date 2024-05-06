export const useDatabaseStore = defineStore("dataBaseStore", {
  state: () => ({
    playlist: false,
<<<<<<< HEAD
    tracks: [],
    favorites: []
  }),

  actions: {
    async trackInfo(){
      const data =  await $fetch('http://localhost:3001/api/tracksDetails')

      this.tracks = data;
    },

    async allFavorites(){
      const data = await $fetch('http://localhost:3001/api/favorite/all/true')

      this.favorites = data
    }

  }
=======
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
>>>>>>> main
});
