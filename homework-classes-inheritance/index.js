class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    if (this.role !== 'admin' && this.role !== 'user') {
      alert(`Invalid role: ${this.role}`);
    }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} is logged in.`);
  }

  logout() {
    console.log(`${this.name} is logged out.`);
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    console.log(`${this.name}'s password is changed.`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  changeUserRole(user, newRole) {
    if (newRole !== 'admin' && newRole !== 'user') {
      alert(`Invalid role: ${newRole}`);
      return;
    }
    user.role = newRole;
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}



const user1 = new User('Petro', 'user');
console.log(user1.getName()); // Petro
console.log(user1.getRole()); // user
user1.login(); // Petro is logged in.
user1.logout(); // Petro is logged out.
user1.changeName('Ivan');
console.log(user1.getName()); // Ivan
user1.changePassword('new_password'); // Ivan's password is changed.

const admin1 = new Admin('Admin1');
const user2 = new User('User2', 'user');
admin1.addUser(user1);
admin1.addUser(user2);
console.log(admin1.getAllUsers()); // [User {...}, User {...}]
admin1.changeUserRole(user2, 'admin');
console.log(user2.getRole()); // admin
admin1.removeUser(user1);
console.log(admin1.getAllUsers()); // [User {...}]
admin1.removeAllUsers();
console.log(admin1.getAllUsers()); // []
