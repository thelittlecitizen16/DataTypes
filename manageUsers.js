class ManageUsers{
     
     constructor() {
         this
        this.allUsers=[];
        this.connectedUsers = new Set();
      }

      isUserExist(name)
      {
         return (this.allUsers.filter(u=>u.name == name).length>0);
      }
      
      getUserByName(name)
      {
          return this.allUsers.filter(u=>u.name == name)[0];
      }

    addNewUserToApllication(name,password) {
        if(!this.isUserExist(name))
        {
            this.allUsers.push(new User(name,password));
        }
        else
        {
            console.log(`there is user with name ${name}`);
        }
    }

    logIn(name,password) {
        if(this.isUserExist(name))
        {
            let user = this.getUserByName(name);

            if(user.getPassword() == password)
            {
                this.connectedUsers.add(user);
            }
             else
            {
                console.log(`no user  with password ${password}`);
            }
        }
        else
        {
            console.log(`no user with name ${name}`);
        }
    }

    isTheUserConnected(name)
     {
        let user = this.getUserByName(name);

         if(this.connectedUsers.has(user))
         {
            console.log(`user connected `);
         }
         else
         {
            console.log(`user unconnected`);
         }
     }

     logOff(name)
     {
        let user = this.getUserByName(name);

        if(this.connectedUsers.has(user))
        {
            this.connectedUsers.delete(user)
        }
        else
        {
           console.log(`user not connected`);
        }
     }
}

let manageUsers=new ManageUsers();
manageUsers.addNewUserToApllication('name','password');
manageUsers.isTheUserConnected('name');
manageUsers.logIn('name','password');
manageUsers.isTheUserConnected('name');
 manageUsers.logOff('name');
manageUsers.isTheUserConnected('name');


