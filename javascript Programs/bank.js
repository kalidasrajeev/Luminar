//create account()
//deposit()
//withdrawal()
//balEnquiry()


class Bank{

    static bankname = () => {
        console.log("SBI")
    }
    createaccount = (acno,name,minbal)=>{
        this.acno = acno;
        this.name = name;
        this.minbal = minbal;
    }

    deposit = (amt) => {
        this.minbal += amt; 
        console.log("your account "+this.acno+" has been credited with amount "+ amt + "rs, Avail balance: "+this.minbal);
    }

    withdrawal = (amt) => {
        if(amt > this.minbal)
        {
            console.log("insufficient balance in your account");
        }
        else
        {
            this.minbal -= amt;
            console.log("your account "+this.acno+" has been debited with amount "+ amt+ "rs, Avail balance: "+this.minbal);
        }
    }

    balEnquriy = () => {
        console.log('Your balance ' +this.minbal);
    }
}

var obj = new Bank();
obj.createaccount(100,"jino",5000);
obj.deposit(1000);
obj.withdrawal(2000)
Bank.bankname();