class User{
    constructor(name,password) {
        this.passwordSymbol = Symbol('password');
        this.name = name;
        this[this.passwordSymbol] = password;
      }

    getPassword() {
        return this[this.passwordSymbol];
    };
}

let user=new User("afek","123");
console.log(user.getPassword()); 
