import ImportMixtape from "../components/Create/ImportMixtape";

export const mixtapeInitialState = {
  name: "",
  creator: "",
  playlist: [],
  isToggled: false,
};

export const mixtapeReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        name: action.payload.name,
        creator: action.payload.creator,
      };
    case "TOGGLE":
      return { ...state, isToggled: !state.isToggled };
    case "ADD":
      if (state.playlist.length < 10) {
        return {
          ...state,
          isToggled: true,
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
      } else {
        window.alert("Max number of songs reached");
        return state;
      }
    case "DEL":
      return {
        ...state,
        playlist: state.playlist.filter(
          (_, index) => index !== action.payload.index
        ),
      };
    case "EDIT":
      const updatedPlaylist = state.playlist.map((song, index) =>
        index === action.payload.index
          ? { ...song, [action.payload.field]: action.payload.value }
          : song
      );
      return {
        ...state,
        playlist: updatedPlaylist,
      };
    case "IMPORT":
      return {
        ...action.payload,
      };

    case "DELALL":
      return mixtapeInitialState;
    case "HIDE":
      return { ...state, isToggled: false };
    default:
      return state;
  }
};
