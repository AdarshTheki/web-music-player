export const initialState = {
  user: null,
  playLists: [],
  collections: [],
  artistsList: [],
  recentTracks: [],
  album: null,
  // token: 'BQCYwJEC_IyUghOnY-8z9_pzi-hq_giHyVWfqFOKUr2INWZF_8oq6nHr2Fs3fnW1erWwTYLU3cUBidiLk5TZcbFt2WhQ2YuAgAsQQm54nKqJ5-KhWHFUxV1-_9khanMhOlUy_P1vaR1Xpm-2RoDjkUDknAFMyGbcG88GFLWnpqMFmq55pIe0R68R2E8N3PL97eD2yenojRuRJ5FCq-znb_ndUIFETM2WvbRA5l8gn2fqA4JgWCAIELWdes0r-XLP91g21Iett3dTe0oKh5r4GjyHaAfS7Y7-HtQBuRLBZyZ8HkM88XiUKLVDbwh0ZzQ5XIHZr1lg',
};

const reducer = (state, action) => {
  // console.log("Reducer Action: ", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.payload,
      };
    case "SET_COLLECTION":
      return {
        ...state,
        collections: action.payload,
      };
    case "SET_RECENT_TRACKS":
      return {
        ...state,
        recentTracks: action.payload,
      };
    case "SET_ARTISTS_LIST":
      return {
        ...state,
        artistsList: action.payload,
      };
    case "SET_ALBUM":
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
