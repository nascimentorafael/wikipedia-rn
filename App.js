import React, { Component } from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import reducer from './redux/reducers/reducer';
import { Root } from './config/router';
import firebase from 'firebase';

const configureStore = (initalState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    ),
  );

  const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
  };

  const pReducer = persistReducer(persistConfig, reducer);

  const store = createStore(pReducer, initalState, enhancer);
  return store;
}

const store = configureStore({
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
});
const persistor = persistStore(store);

class App extends Component {
  componentWillMount() {
    const persistOptions = { whitelist: ['auth'] };

    const config = {
      apiKey: "AIzaSyAzcmp2OEcL8dpbrAutK5e6iKAhyPDt5uc",
      authDomain: "wikipedia-87472.firebaseapp.com",
      databaseURL: "https://wikipedia-87472.firebaseio.com",
      projectId: "wikipedia-87472",
      storageBucket: "wikipedia-87472.appspot.com",
      messagingSenderId: "728094839473",
    };
    firebase.initializeApp(config);


  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root store={store} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
