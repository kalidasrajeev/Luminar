/*var ur = document.URL;
//alert(ur)

var links = document.links;
//alert(links)

var tags = document.getElementsByTagName("h1");

for(tg of tags)
{
    tg.style.color = "red";
}

var hone = document.getElementById("one");
hone.style.color = "blue";

var cls = document.getElementsByClassName("cls");

for( tg of cls )
{
    tg.style.color = "green";
}
*/

var hd = document.querySelector("#one");
hd.style.color = "red";

var lis = document.querySelectorAll('.cls');
lis.forEach(tg=>tg.style.color = "green");

var dom = document.querySelector('#dom');

//dom.textContent = "Document Object Methods";

dom.innerHTML = "<em>Document Object Methods</em>";


