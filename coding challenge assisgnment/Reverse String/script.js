
var btn = document.getElementById("btn")


    btn.addEventListener("click",nameReverse)

    function nameReverse() {
       var  timeout = setTimeout(nameReverse1, 3000);
      }

    function nameReverse1() {
        var input = document.getElementById("input").value;
        var reverse = input.split("").reverse().join("");
        document.getElementById("reverse").innerHTML = reverse
    }






