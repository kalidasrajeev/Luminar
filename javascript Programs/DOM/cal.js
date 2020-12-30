function display(num)
{
    var txt =  document.querySelector("#display");
    txt.value += num;
}

function solve()
{
    var txt =  document.querySelector("#display");
    let result = eval(txt.value);
    txt.value = result;
}

function clearbox()
{
    var txt =  document.querySelector("#display");
    txt.value = "";
}