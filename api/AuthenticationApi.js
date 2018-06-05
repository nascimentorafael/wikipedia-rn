import firebase from 'firebase';

/**
 * @description Firebase Authentication API
 *
 *
 * @see https://firebase.google.com/docs/auth/web/start
 */

class AuthenticationApi {
  loginUser(email, password) {
    return new Promise ((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        const user = {
          id: response.uid,
          email: response.email,
          token: response.refreshToken
        };
        resolve(user);
      })
      .catch((response) => {
        const error = {
          errorCode: response.code,
          errorMessage: response.message
        }
        reject(error);
      });
    });
  }
  registerUser(email, password) {
    return new Promise ((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const user = {
          id: response.uid,
          email: response.email,
          token: response.refreshToken
        };
        resolve(user);
      }).catch((response) => {
        const error = {
          errorCode: response.code,
          errorMessage: response.message
        }
        reject(error);
      });
    });
  }
}

export default new AuthenticationApi();