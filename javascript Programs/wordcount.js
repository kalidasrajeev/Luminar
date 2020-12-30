var text = "this is this is java"

//word count this:2 is:2 java:1

var res = text.split(" ")
obj = {}

for(let word of res)
{
   if(word in obj)
   {
      obj[word] += 1;
   }   
   else
   {
       obj[word] = 1;  
   } 
}

console.log(obj)


