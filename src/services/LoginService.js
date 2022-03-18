export default class {
  setIsLogged(val) {
    localStorage.setItem("isLogged", val);
  }
  getIsLogged() {
    return localStorage.getItem("isLogged");
  }
}
