const drumKit = document.querySelector("#drum-kit");
drumKit.addEventListener("click", handleClick);

function handleClick(e) {
  const button = e.target;
  const buttonInnerHTML = button.innerHTML;
  makeSound(buttonInnerHTML);
}

document.addEventListener("keydown", function(e) {
  makeSound(e.key.toUpperCase());
});

function makeSound(key) {
  switch (key) {
    case "Q":
      new Audio("sounds/crash.mp3").play();
      break;
    case "W":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "E":
      new Audio("sounds/snare.mp3").play();
      break;
    case "A":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "S":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "D":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "Z":
      new Audio("sounds/tom-4.mp3").play();
      break;
    
  }
}