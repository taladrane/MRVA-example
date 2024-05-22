function getUserData(username) {
    var query = "SELECT * FROM users WHERE username='" + username + "'";
    var result = executeQuery(query);
    return result;
  }
