var clk = document.querySelector("#clk");
clk.addEventListener("click",()=>{
    clk.textContent = "clicked";
    clk.style.color = "red";
})

var dblclk = document.querySelector('#dblclk');
dblclk.addEventListener("dblclick",()=>{
    dblclk.textContent = "Double Clicked";
    dblclk.style.color = "blue";
})

var mov = document.querySelector('#mov');
mov.addEventListener('mouseover',()=>{
    mov.textContent = "mouse over";
    mov.style.color = "green";
})


mov.addEventListener('mouseout',()=>{
    mov.textContent = "mouse out";
    mov.style.color = "black";
})