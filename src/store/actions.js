import {
  ADD_VOTE,
  LOAD_CANDIDATES,
  SHOW,
  AS_PERCENTAGE,
  SHOW_ALL,
} from "./types";

export const addVote = (id) => ({
  type: ADD_VOTE,
  payload: id,
});

export const loadCandidates = (candidates) => ({
  type: LOAD_CANDIDATES,
  payload: candidates,
});

export const show = (id) => ({
  type: SHOW,
  payload: id,
});

export const showAllCandidates = (value) => ({
  type: SHOW_ALL,
  payload: value,
});

export const showAsPercentage = (value) => ({
  type: AS_PERCENTAGE,
  payload: value,
});
