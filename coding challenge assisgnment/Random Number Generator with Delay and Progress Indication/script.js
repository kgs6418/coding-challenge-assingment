
var time = setInterval(() => {
    const randomNumber = ()=>{
        let x = (Math.random()*100)+1;
    console.log("random number is: "+x)
    document.getElementById("num").innerHTML="random number is: "+x
    }
   
    randomNumber()
    alert("time left : 3 second")
    alert("time left : 2 second")
    alert("time left : 1 second") 

}, 3000);




