//Detecting screen button press
var numberOfDrumbtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumbtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var btnInnerhtml = this.innerHTML;
    makeSound(btnInnerhtml);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch (key) {
    case "c":
      var audio1 = new Audio("crash.mp3");
      audio1.play();
      break;
    case "k":
      var audio2 = new Audio("kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("snare.mp3");
      audio3.play();
      break;
    case "t":
      var audio4 = new Audio("tom-1.mp3");
      audio4.play();
      break;
    case "b":
      var audio5 = new Audio("tom-2.mp3");
      audio5.play();
      break;
    case "p":
      var audio6 = new Audio("tom-3.mp3");
      audio6.play();
      break;
    case "v":
      var audio7 = new Audio("tom-4.mp3");
      audio7.play();
      break;
    default:
      alert("random key pressed!");
  }
}
