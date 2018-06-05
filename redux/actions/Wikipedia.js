import {
  WIKIPEDIA_SEARCH_FAIL,
  WIKIPEDIA_SEARCH_SUCCESS,
  WIKIPEDIA_SEARCH_START,
} from '../constants/action-types';
import WikipediaApi from '../../api/WikipediaApi';

const WIKIPEDIA_ERROR = {
  ZERO_RESPONSE: 'wikipedia/zero response',
};

const actionCreator = (type, payload = null) => ({
  type,
  payload
});

export const resetState = () => (dispatch) =>
dispatch(actionCreator(RESET_STATE));

export const getHistorySearchedItems = (state) => state.historySearch;

const formatSearchResult = (result) => ({
  title: result[0],
  items: result[1].map((title, i) => ({
    title,
    text: result[2][i],
    image: result[3][i],
  })),
});

export const search = (text, size = 10) => (dispatch) => {
  dispatch(actionCreator(
    WIKIPEDIA_SEARCH_START,
    { text, size },
  ));

  return new Promise ((resolve, reject) => {
    WikipediaApi.search(text, size)
    .then((response) => {
      const result = formatSearchResult(response);
      dispatch(actionCreator(
        WIKIPEDIA_SEARCH_SUCCESS,
        result,
      ));
      resolve(result);
    }).catch((error) => {
      dispatch(actionCreator(
        WIKIPEDIA_SEARCH_FAIL,
        error
      ));
      reject(error);
    });
  });
};
