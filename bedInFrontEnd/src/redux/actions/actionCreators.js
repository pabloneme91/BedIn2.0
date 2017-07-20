export function logInUser(err) {
  return {
    type: 'LOG_IN_USER',
  }
}

export function userIsLoggedIn(err) {
  return {
    type: 'USER_IS_LOGGED_IN',
  }
}

export function userFailedToLogin() {
  return {
    type: 'USER_FAILED_TO_LOG_IN',
  }
}

export function failedPost(err) {
  return {
    type: 'FAILED_POST',
    err
  };
}

export function logInFetch(userData) {

  return (dispatch) => {
    dispatch(logInUser());

    return fetch('./users/login', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(userData)
    })
      .then(response => {
        return new Promise(function(resolve, reject) {
          if(response.status == 401) {
            dispatch(userFailedToLogin())
              reject();
          } else {
            resolve(response);
          }
        });
      })
      .then(response => response.json())
      .then(data => dispatch(userIsLoggedIn()))
      .catch(err => dispatch(failedPost(err)))
  };
};
