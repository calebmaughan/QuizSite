class Auth {

  static authenticateUser(token,userId) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  static isUserAuthenticated() {
    return (localStorage.getItem('token') !== null
            && localStorage.getItem('userId') !== null);
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static getUserId() {
    return localStorage.getItem('userId');
  }

}

export default Auth;
