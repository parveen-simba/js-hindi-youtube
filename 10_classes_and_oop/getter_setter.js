class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}parveen`;
  }

  set password(value) {
    this._password = value;
  }
}

const parveen = new User("h@parveen.ai", "abc");
console.log(parveen.email);
