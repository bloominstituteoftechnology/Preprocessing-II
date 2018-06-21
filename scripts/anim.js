//full page spin
function clicked() {
  toggleVisible();//hide the robbie images lurking off page
  document.getElementById("spinner").style.animation = "spin 4s linear"; //add the animation values to the element with the right id
  setTimeout(endPageSpin, 4000);//when the animation is done, clean stuff up
}

//full page spin clean up function
const endPageSpin = () => {
  document.getElementById("spinner").style.animation = "";//remove animation values to reset
  toggleVisible();//bring the robbies back
}

//lots of spins function
function clickedToo() {
  let arr = document.getElementsByClassName("spinny");//grab everything with the right class name and put in array
  for(let i =0; i< arr.length; i++){
    arr[i].style.animation = 'spin 4s linear';
  } //loop through the array and add the spin animation with values to them
  setTimeout(function(){
    for(let i=0; i<arr.length; i++){arr[i].style.animation = ''}
  }, 4000);//after the animation finishes, loop through again to remove all the values to reset
}

//the robbie dance function
function startDance() {
  let audio = new Audio('audio/6y2h2-xpiz2.ogg');//set audio file to a variable
  let leftie = document.getElementById("leftie");//grab the left image
  let rightie = document.getElementById("rightie");//grab the right image
  leftie.style.animation = "leftRot 6s linear";//start the animation for the left image
  audio.play();//start the audio
  rightieShout(rightie);//start the right image control function
  setTimeout(function(){leftie.style.animation = "";}, 6000);//after animation is done, remove values to reset
}

//right robbies function
function rightieShout(obj){
  setTimeout(function(){obj.style.animation = "rightShout 1s linear";}, 5250);//wait 5.25 seconds to add the animation(timing it to the shout)
  setTimeout(function(){obj.style.animation = ""}, 1000);//clean up after animation
}

//turns off the button that calls this, so that the audio doesn't play multiple times over each other
function buttonOff(obj) {
  obj.disabled = true;//disable passed obj
  setTimeout(function() {
    obj.disabled = false;
  }, 8000);//wait for animation and then re-enable the obj
}

//toggles visibility of the robbie images
//found that the only way this works is if the style is placed in the html element itself and not in css file
function toggleVisible(){
  let rightie = document.getElementById("rightie");//grab right image
  let leftie = document.getElementById("leftie");//grab left image
  if(rightie.style.visibility == "visible"){//check if visibility: visible
    rightie.style.visibility = 'hidden';
    leftie.style.visibility = 'hidden';//if so, set right and left to hidden
  }else{
    rightie.style.visibility = 'visible';
    leftie.style.visibility = 'visible';//if not, set them to visible
  }
}
