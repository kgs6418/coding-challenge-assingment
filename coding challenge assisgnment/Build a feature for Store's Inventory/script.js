var item1 = document.getElementById("i1").value;
var price_USD = document.getElementById("p1").value;
var price_INR = document.getElementById("pp1").value;

document.getElementById("btn").addEventListener("click", ()=>{
    document .getElementById("pp1").value=document.getElementById("p1").value*80;


})

console.log("items and their price in dollar")
let arr =[
    {
        'sugar':3,
        'tea':4,
        'coffee':2
    }
]
console.log(arr)

console.log("items and their price in rupees")
arr.map((x)=>{
    
    let obj={
        'sugar':x.sugar*80,
        'tea':x.tea*80,
        'coffee':x.coffee*80
    }
    console.log(obj)
    
})







