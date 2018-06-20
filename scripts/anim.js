function clicked() {
  document.getElementById("spinner").style.animation = "spin 4s linear";
  setTimeout(function(){document.getElementById("spinner").style.animation = ""}, 4000);
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
  let audio = new Audio('https://s21.aconvert.com/convert/p3r68-cdx67/fzbrt-2nbm7.ogg');
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
