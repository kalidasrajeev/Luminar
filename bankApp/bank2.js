
class Bank {

    static getAccountDet = () => {

        var AccDetails = {
            userone: { acno: 1000, balance: 1000, username: "userone", password: 'testuser' },
            usertwo: { acno: 1001, balance: 12000, username: 'usertwo', password: 'testuser1' },
            userthree: { acno: 1001, balance: 1300, username: 'userthree', password: 'testuser2' }
        }

        return AccDetails;
    }
    
    static authenticateuser = (uname,pass) => {
        let dataset = Bank.getAccountDet();
        if (uname in dataset) {
            if (dataset[uname].password === pass) {
                return 1;
                //console.log("Successful Login");
                //window.location = "bankhome.html";
            }
            else {
                //console.log("Invalid Password");
                return 0;
            }
        }
        else {
            //console.log("Invalid Username");
            return -1;
        }

    }

    static login = () => {
        let uname = document.querySelector('#username').value;
        let pass = document.querySelector('#pass').value;     
        //let dataset = Bank.getAccountDet();

        /*if (uname in dataset) {
            if (dataset[uname].password === pass) {
                
                console.log("Successful Login");
                window.location = "bankhome.html";
            }
            else {
                console.log("Invalid Password");
            }
        }
        else {
            console.log("Invalid Username");
        }*/

        if(Bank.authenticateuser(uname,pass) == 1)
        {
            console.log("Successful Login");
            window.location = "bankhome.html";
        }
        else if(Bank.authenticateuser(uname,pass) == 0)
        {
            console.log("Invalid Password");
        }
        else if(Bank.authenticateuser(uname,pass) == -1)
        {
            console.log("Invalid Username");
        }
    }

    static deposit = () => {
        let uname = document.querySelector('#username').value;
        let pass = document.querySelector('#pass').value;   
        let amt = Number(document.querySelector('#amt').value);   
        let dataset = Bank.getAccountDet();
        
        /*if (uname in dataset) {
            if (dataset[uname].password === pass) {                
                console.log("Successful Login");
                dataset[uname].balance += amt;
                console.log(dataset[uname].balance)
            }
            else {
                console.log("Invalid Password");
            }
        }
        else {
            console.log("Invalid Username");
        }*/

        if(Bank.authenticateuser(uname,pass) == 1)
        {
            console.log("Successful Login");
            dataset[uname].balance += amt;
            console.log(dataset[uname].balance)

        }
        else if(Bank.authenticateuser(uname,pass) == 0)
        {
            console.log("Invalid Password");
        }
        else if(Bank.authenticateuser(uname,pass) == -1)
        {
            console.log("Invalid Username");
        }

    }

    static withdraw = () => {
        let uname = document.querySelector('#username').value;
        let pass = document.querySelector('#pass').value;   
        let amt = Number(document.querySelector('#amt').value);   
        let dataset = Bank.getAccountDet();
        
        /*if (uname in dataset) {
            if (dataset[uname].password === pass) {                
                console.log("Successful Login");
                if(dataset[uname].balance >= amt)
                {
                    dataset[uname].balance -= amt;
                    console.log(dataset[uname].balance)
                }
                else
                {
                    console.log("amount is not available")
                }
                
            }
            else {
                console.log("Invalid Password");
            }
        }
        else {
            console.log("Invalid Username");
        }

        */


       if(Bank.authenticateuser(uname,pass) == 1)
       {
           console.log("Successful Login");
           if(dataset[uname].balance >= amt)
           {
               dataset[uname].balance -= amt;
               console.log(dataset[uname].balance)
           }
           else
           {
               console.log("amount is not available")
           }

       }
       else if(Bank.authenticateuser(uname,pass) == 0)
       {
           console.log("Invalid Password");
       }
       else if(Bank.authenticateuser(uname,pass) == -1)
       {
           console.log("Invalid Username");
       }

    }
}



