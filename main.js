

var bigText = document.getElementById('bigText');
var nextBtn = document.getElementById('nextBtn');
var smallText = document.getElementById('smallText');
var resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', resetState());
nextBtn.addEventListener('click', changeState());

currentState = 0;
states = [0, 1, 2, 3, 4, 5];

var myState = states[currentState];

function resetState() {
   currentState = 0;
   renderState();
}

function changeState() {
   currentState++;
   renderState();
}

function renderState() {
switch (myState) {
   
   case 0:
      bigText.textContent = 'I can read your mind';
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = 'Prove it.';
      smallText.textContent = 'No really. Let me show you.';
      resetBtn.style.visibility = 'hidden';
      break;

   case 1:
      bigText.textContent = 'Pick a number from 01-99';
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = 'NEXT';
      smallText.textContent = 'When you have your number, hit NEXT';
      resetBtn.style.visibility = 'visible';
      resetBtn.textContent = 'Reset';
      break;
   }
}

renderState();