const initialState = {
  candidates: [],
  totalVotes: 0,
  isPercentage: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CANDIDATES":
      return { ...state, candidates: action.payload };
    case "ADD_VOTE":
      return {
        ...state,
        candidates: state.candidates.map((x) =>
          x.id === action.payload ? { ...x, votes: x.votes + 1 } : x
        ),
        totalVotes: (state.totalVotes += 1),
      };
    case "SHOW":
      return {
        ...state,
        candidates: state.candidates.map((x) =>
          x.id === action.payload ? { ...x, show: !x.show } : x
        ),
      };
    case "SHOW_ALL":
      return {
        ...state,
        candidates: state.candidates.map((x) => ({
          ...x,
          show: action.payload,
        })),
      };
    case "AS_PERCENTAGE":
      return {
        ...state,
        isPercentage: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
