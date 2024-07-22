export const mixtapeInitialState = {
  name: "",
  creator: "",
  playlist: [],
};

export const mixtapeReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        name: action.payload.name,
        creator: action.payload.creator,
      };
    case "ADD":
      if (state.playlist.length < 10) {
        return {
          ...state,
          playlist: [
            ...state.playlist,
            {
              title: action.payload.song.snippet.title,
              artist: action.payload.song.snippet.channelTitle,
              url: `https://www.youtube.com/watch?v=${action.payload.song.id.videoId}`,
              thumbnail: action.payload.song.snippet.thumbnails.default.url,
            },
          ],
        };
      } else return state;
    case "DEL":
      return {
        ...state,
        playlist: state.playlist.filter(
          (_, index) => index !== action.payload.index
        ),
      };
    case "EDIT":
      return state;
    default:
      return state;
  }
};
