const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  
  var url = /(http:\/\/www\.|https:\/\/www\.)[a-zA-Z0-9!@#$%^&*]+\.[a-zA-z]+/g
  var regex = new RegExp(url);
    if(input.value.match(regex)){
    alert("URL matched")
    }else{
        alert("Wrong URL")
    }

    })






