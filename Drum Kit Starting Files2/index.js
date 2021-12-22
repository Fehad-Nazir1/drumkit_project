var l = document.querySelectorAll(".drum").length
// animate effect
function animation (x) {
  document.querySelector("."+ x).classList.add("pressed")

  setTimeout(function () {
    document.querySelector("."+ x).classList.remove("pressed")
  }, 100);
}

function playsound(x){
  var audio = new Audio("sounds/" + x + ".mp3")
  audio.play()
}


// for clicking on screen
for(i = 0;i < l ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var x = this.innerText
    playsound(x)
    animation(x)
  })
}

//for pressing key on the keyboard
document.addEventListener("keypress",function(){
var x = event.key
if(x == "w" || x == "a" || x == "s" || x == "d" || x == "j" || x == "k" || x == "l") {
  playsound(x)
  animation(x)
}
})
