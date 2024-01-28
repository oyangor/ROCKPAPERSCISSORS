let result = '';
let outcome = '';
let scoreVariable = '';
let sum = 0;
let playerMove = '';

function computerMove() {
  let randomNumber = Math.random();
    let computerPick = '';
    if (randomNumber <= 1/3) {
       computerPick = 'Rock'
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
       computerPick = 'Paper'
    } else if (randomNumber > 2/3) {
       computerPick = 'Scissors'
    };

  return computerPick
}

let score = {
  Wins:0,
  Loss:0,
  Ties:0,
  };

function playMove(Tie ,Lose ,Win) {
  let computerMove1 = computerMove()
  sum = 0;

   // Check if score exists in local storage, if not, initialize it
  score = JSON.parse(localStorage.getItem('userRAO')) || {  Wins:0,
    Loss:0,
    Ties:0,
     };

    if (computerMove1 === 'Rock') {
      result = Tie
    }
    else if (computerMove1 === 'Paper') {
      result = Lose
    }
    else if (computerMove1 === 'Scissors') {
      result = Win
    };
    outcome=result; //update the outcome varible

    scoreVariable = scoreFunction()

    document.querySelector('.render-computerMove').innerHTML = computerMove1;

    document.querySelector('.winsclass').innerHTML = score.Wins;
    document.querySelector('.lossclass').innerHTML = score.Loss;
    document.querySelector('.tieclass').innerHTML = score.Ties;
    
  return result
}


function scoreFunction(){
  if (outcome === 'Win') {
    score.Wins = score.Wins + 1;
  }else if (outcome === 'Loss') {
    score.Loss = score.Loss + 1;
  }else if (outcome === 'Tie') {
    score.Ties = score.Ties + 1;}
    
    console.log(score)

   //updating the sum function
   sum = score.Wins + score.Loss + score.Ties
   console.log(sum)
 
 
   // Update local storage
   localStorage.setItem('userRAO', JSON.stringify(score));

    // Update the HTML element for total games
  document.querySelector('.totalgames').innerHTML = sum;

  return score
}

function resetScores() {
  
    // Reset scores to zero
    score.Wins = 0;
    score.Loss = 0;
    score.Ties = 0;
    sum = 0;
    outcome='';
    playerMove = ''

    localStorage.setItem('userRAO', JSON.stringify(score));
    // Update the HTML elements
    document.querySelector('.winsclass').innerHTML = score.Wins;
    document.querySelector('.lossclass').innerHTML = score.Loss;
    document.querySelector('.tieclass').innerHTML = score.Ties;
    document.querySelector('.totalgames').innerHTML = sum;
    document.querySelector('.render-computerMove').innerHTML = outcome;
    document.querySelector('.render-result').innerHTML = outcome;
    document.querySelector('.render-playerMove').innerHTML = playerMove
    
  }
 