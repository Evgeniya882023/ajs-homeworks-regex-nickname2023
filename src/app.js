export default class Validator {
  constructor(username) {
    this.username = String(username);
  }

  validateUsername() {
    return /^[a-z]+[a-z-_\d{0,3}]*[a-z]+$/i.test(this.username);
  }
}
