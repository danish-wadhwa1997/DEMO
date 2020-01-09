import { GET_ALL_SHARES, VIEW_SHARE } from "../store/Constants";

export function getAllShares(shares) {
  return {
    type: GET_ALL_SHARES,
    payload: shares
  };
}

export function viewShare(share) {
  return {
    type: VIEW_SHARE,
    payload: share
  };
}
