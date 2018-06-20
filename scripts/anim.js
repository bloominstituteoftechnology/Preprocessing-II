function clicked() {
  toggleVisible();
  document.getElementById("spinner").style.animation = "spin 4s linear";
  setTimeout(endPageSpin, 4000);
}

const endPageSpin = () => {
  console.log("In endPageSpin()");
  document.getElementById("spinner").style.animation = "";
  toggleVisible();
}

function clickedToo() {
  let arr = document.getElementsByClassName("spinny");
  for(let i =0; i< arr.length; i++){
    arr[i].style.animation = 'spin 4s linear';
  }
  setTimeout(function(){
    for(let i=0; i<arr.length; i++){arr[i].style.animation = ''}
  }, 4000);
}

function startDance() {
  let audio = new Audio('audio/6y2h2-xpiz2.ogg');
  let leftie = document.getElementById("leftie");
  let rightie = document.getElementById("rightie");
  leftie.style.animation = "leftRot 6s linear";
  audio.play();
  rightieShout(rightie);
  setTimeout(function(){leftie.style.animation = "";}, 6000);
}

function rightieShout(obj){
  setTimeout(function(){obj.style.animation = "rightShout 1s linear";}, 5250);
  setTimeout(function(){obj.style.animation = ""}, 1000);
}

function buttonOff(obj) {
  obj.disabled = true;
  setTimeout(function() {
    obj.disabled = false;
  }, 8000);
}

function toggleVisible(){
  let rightie = document.getElementById("rightie");
  let leftie = document.getElementById("leftie");
  if(rightie.style.visibility == "visible"){
    rightie.style.visibility = 'hidden';
    leftie.style.visibility = 'hidden';
  }else{
    rightie.style.visibility = 'visible';
    leftie.style.visibility = 'visible';
  }
}
