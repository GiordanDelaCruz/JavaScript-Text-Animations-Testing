// jshint esversion: 6

// Retrieve the targeted text for wave animation
const text = document.querySelector(".fancy");
const strText = text.textContent;

// Create an array containing the individual characters of the text
const splitText = strText.split("");
console.log(splitText);
// Clear the orignal text
text.textContent = "";

// Added the individual characters as spans in the cleared text
for(let i=0; i < splitText.length; i++){
  if( splitText[i] === " "){
    text.innerHTML += "<span class='white-space'>" + " " + "</span>";
  }else{
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
}

// Create a time interval for the duration of the animation
let char = 0;
let timer = setInterval(onTick, 50);

// Give all the individual letters the animation class
function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("waveIn");
  char++;
  if( char ===  splitText.length){
    complete();
    return;
  }
}

// Reset the interval to null
function complete(){
  clearInterval(timer);
  timer = null;
}
