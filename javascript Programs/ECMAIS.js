//map()
//filter()
//reduce()
//sort()

var arr = [10,11,12,13,14,15,16]
var squ = arr.map(num=>num**2)
console.log(squ)

var evens = arr.filter(num=>num%2==0)

console.log(evens)

var min = arr.reduce(num=>Math.min(num))

console.log(min)

var names = ["sachin","sehwag","dravid","laxman","Yuvraj","kaif"]

var name = names.map(na=>na.toUpperCase())

console.log(name)

var name1 = names.filter(na=>na.charAt(0) == "s").map(na=>na.toUpperCase())
console.log(name1)