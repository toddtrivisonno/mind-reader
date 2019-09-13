

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
   
   case 2:
      bigText.textContent = 'Add both digits together to get a new number';
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = 'NEXT';
      smallText.textContent = 'Ex: 27 is 2 + 7 = 9 Click next to proceed';
      resetBtn.style.visibility = 'visible';
      resetBtn.textContent = 'Reset';
      break;

   case 3:
      bigText.textContent = 'Subtract your new number from the original number';
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = 'NEXT';
      smallText.textContent = 'Ex: 27 - 9 = 18 Click next to proceed';
      resetBtn.style.visibility = 'visible';
      resetBtn.textContent = 'Reset';
      break;

   case 4:
      bigText.textContent = '0 - &';
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = 'REVEAL';
      smallText.textContent = 'Find your new number. Note the symbol beside the number';
      resetBtn.style.visibility = 'visible';
      resetBtn.textContent = 'Reset';
      break;

   case 5:
         bigText.textContent = '&';
         nextBtn.style.visibility = 'hidden';
         smallText.textContent = 'Your symbol is: &';
         resetBtn.style.visibility = 'visible';
         resetBtn.textContent = 'Reset';
         break;
   }
}

renderState();