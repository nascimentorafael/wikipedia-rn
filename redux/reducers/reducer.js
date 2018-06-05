import {
  LOGIN_USER_SUCCESS,
  RESET_STATE,
  REGISTER_USER_SUCCESS,
  WIKIPEDIA_SEARCH_SUCCESS,
} from '../constants/action-types';

const isTitleAdded = (state, title) => !!state.historySearch.find((s) => s.title === title);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      console.log('REDUCER - LOGIN SUCCESS', action);
      const payload = action.payload;
      console.log({payload});
      return {
        ...state,
        user: {
          ...state.user,
          ...payload.user,
          isAuthenticated: true,
        }
      };
    case RESET_STATE:
      return {
        user: {
          id: '',
          email: '',
          token: '',
          isAuthenticated: false,
        },
        historySearch: [
          { title: 'Steve Jobs', image: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552'},
          { title: 'React Native', image: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552'},
          { title: 'Faro', image: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552'},
        ],
      };
    case WIKIPEDIA_SEARCH_SUCCESS:
      const { title, items } = action.payload;
      if (!isTitleAdded(state, title) && items.length > 0) {
        return {
          ...state,
          historySearch: [
            ...state.historySearch,
            { title, image: items[0].image },
          ]
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;