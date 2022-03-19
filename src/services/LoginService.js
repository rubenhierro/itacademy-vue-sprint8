export default class {
  setIsLogged(val) {
    localStorage.setItem("isLogged", val);
    window.user = val;
  }
  getIsLogged() {
    return localStorage.getItem("isLogged");
  }

  hasUser(userList, user) {
    return userList.some((i) => i.username === user.username);
  }

  hasPassword(userList, user) {
    const userFind = userList.find((i) => i.username === user.username);
    return userFind.password === user.password ? true : false;
  }

  setUser(userList) {
    userList = JSON.stringify(userList);
    localStorage.setItem("userList", userList);
  }
}
