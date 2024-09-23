let input = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector("h1")


button.addEventListener("click" ,function(){
    if( input.value == "male") {
       result.innerHTML= ("Tui Kharap")
    
    }
    else{( input.value == "female")
        result.innerHTML= ("Tui Beshi Kharap");
    }
})