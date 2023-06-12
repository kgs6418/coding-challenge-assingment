var input = document.getElementById("input")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    //lower case
    var url = /[a-z]+/g
    var regex = new RegExp(url);
    if(input.value.match(regex)){
    console.log(" ")
    }else{
        alert("lower case missing")
    }
    
    //upper case
    var url = /[A-Z]+/g
    var regex = new RegExp(url);
    if(input.value.match(regex)){
        console.log(" ")
    }else{
        alert("upper case missing")
    }

    //digit check
    var url = /[0-9]+/g
    var regex = new RegExp(url);
    if(input.value.match(regex)){
        console.log(" ")
    }else{
        alert("digit  missing")
    }

    //special character
    var url = /[-_]/g
    var regex = new RegExp(url);
    if(input.value.match(regex)){
        console.log(" ")
    }else{
        alert("special character missing")
    }

    //URL validation
    var url = /(https:\/\/www.)[a-zA-Z0-9]+\.[A-Za-z]+\/[a-zA-z0-9-_]+\/[A-Za-z0-9]+$/g
    var regex = new RegExp(url);
    if(input.value.match(regex)){
    alert("URL matched")
    }else{
        alert("Not a valid URL")
    }

})