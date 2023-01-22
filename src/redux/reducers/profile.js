const profile = {};
export default function reducer(state = profile, action) {
  switch (action.type) {
    case "SET_PROFILE":
      return action.data;
    case "SET_PROFILE_IMAGE":
      return { ...state, profilePic: action.image };
    default:
      return state;
  }
}
