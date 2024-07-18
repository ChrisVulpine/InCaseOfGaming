import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    // localStorage.removeItem('id_token');
  //     const decoded = decode(token);
  //     if (decoded.exp < Date.now() / 1000) {
  //       return true;
  //     } else return false;
  //   } catch (err) {
  //     return false;
  //   }
  // };
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}
    
    getToken() {
        return localStorage.getItem('token_id'); //authToken
    }

    login(idToken) {
        localStorage.setItem('token_id', idToken);
        window.location.assign('/');
    }

    logout() {  
        localStorage.removeItem('token_id');
        window.location.assign('/');
    }
}

export default new AuthService();

