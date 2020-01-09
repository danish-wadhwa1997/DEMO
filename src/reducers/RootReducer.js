import { GET_ALL_SHARES, VIEW_SHARE } from "../store/Constants";

export default function shareReducer(state, action) {
  switch (action.type) {
    case GET_ALL_SHARES:
      // console.log("get all shares" + JSON.stringify(action.payload[0]));
      return {
        ...state,
        shares: action.payload,
        focussedShare: action.payload[0]
      };

    case VIEW_SHARE:
      // console.log(" inside view share" + action.payload);

      return {
        ...state,
        focussedShare: state.shares.find(function(share) {
          return share.symbol === action.payload;
        })
      };

    default:
      return state;
  }
}
