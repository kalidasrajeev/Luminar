var AccDetails = {
    userone: {acno:1000, balance:1000, username: "userone", password: 'testuser'},
    usertwo: {acno:1001, balance:12000, username: 'usertwo', password: 'testuser1'},
    userthree: {acno:1001, balance:1300, username: 'userthree', password: 'testuser2'}
}

//console.log("userone" in AccDetails)

/*if("userone" in AccDetails)
{
    console.log(AccDetails["userone"].acno)
}
else
{
    console.log("User not exist");
}*/

var username = "userone";
var password = "testuser";

if(username in AccDetails)
{
    if(AccDetails[username].password === password)
    {
        AccDetails[username].balance += 5000;
        console.log("Successful Login");
    }
    else
    {
        console.log("Invalid Password");
    }
}
else
{
    console.log("Invalid Username");
}

console.log(AccDetails[username].balance)