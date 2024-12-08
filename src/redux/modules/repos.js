import axios from "axios";
export const GET_REPOS = "repos/GET_REPOS";
export const GET_SPECIFIC_REPO = 'repos/GET_SPECIFIC_REPO';
export const REPO_ERROR = "repos/REPO_ERROR";

export const getRepo = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REPO_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

export const getSpecificRepo = (repoFullName) => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.github.com/repos/${repoFullName}`); 
    dispatch({
      type: GET_SPECIFIC_REPO,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: REPO_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    })
  }
}
const initialState = {
  repos: [],
  specificRepo: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
      };
    case GET_SPECIFIC_REPO:
      return {
        ...state,
        specificRepo: payload,
      };
    case REPO_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
