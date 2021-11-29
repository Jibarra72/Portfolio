const word = document.getElementById('word');
const incorrect = document.getElementById('incorrect');
const incorrectLettersEl = document.querySelector('#incorrect p');
const backdrop = document.getElementById('backdrop');
const finalMsg = document.getElementById('final-msg');
const msgInfo = document.getElementById('msg-info');
const playBtn = document.getElementById('play');
const indication = document.getElementById('indication');
const bodyParts = document.getElementsByClassName('body-part');

// List of words
const wordList = [
  'market',
  'knock',
  'smite',
  'windy',
  'coin',
  'throw',
  'silence',
  'bluff',
  'downfall',
  'climb',
  'lying',
  'weaver',
  'snob',
  'kickoff',
  'match',
  'coat',
  'emerald',
  'coherent',
  'multiple',
  'square',
];

// Word that is selected to play
let selectedWord = null;
// Stores the count of no.of incorrectly typed letters
let incorrectCount = 0;
// Correct letters typed by the player
const correctLetters = [];
// Incorrect letters typed by the player
const incorrectLetters = [];

// Select a word randomly from wordList and initialize in the DOM
function initializeWord() {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  const noOfLetters = selectedWord.length;
  for (let i = 0; i < noOfLetters; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('letter');
    word.append(listItem);
  }
}

// Displays an indication sliding from the bottom
function displayIndication() {
  indication.classList.add('visible');

  setTimeout(() => {
    indication.classList.remove('visible');
  }, 2400);
}

// Update the figure when incorrect letters typed
function updateFigure() {
  try {
    bodyParts[incorrectCount].style.display = 'block';
    incorrectCount++;
  } catch (error) {}
}

// When player wins
function successState() {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = 'Hurrah! You won.';
  }, 400);
}

// When player looses
function failureState() {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = `Oops! You lost. The right word is "${selectedWord}"`;
  }, 400);
}

