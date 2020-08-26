
//1. create and assign variables and retrieve necessary html elements

var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imgRex = [];
var rand;
var flipIndex = 0; //1 is 1 card flipped, 2 is 1 cards flipped, if flipindex = 2, js will check if cards match. if not, it will turn it back over
var cardTextRec = []; //for image text and ids <img src="">
var cardRec = ["card1", "card4"];
var cardNum;
var front;
var back;
var cardCheck = 0;
var correct = 0;

var memory = document.getElementById("game");
var time = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var newGame;
var result = document.getElementById("result");
var opacityD = document.getElementById("opacityD");
var h1Res = document.getElementById("h1Res");
var pRes = document.getElementById("pRes");

var status = 0;
var countDown;
var secsInput = 60;
var seconds = secsInput;
var gameOver = false;

//2. make the flipping work

memory.addEventListener("click", function(e){
  //even object - contains information about the event, which exact element was clicked, id of that element, when the event happened
  var parent = e.target.parentElement;
  var numId = parent.id;
  if(Number.isInteger(parseInt(numId.replace("back", ""), 10))){
     // "back2" --> "2"
    cardClick(parent.parentElement.id);
  }
  else{
    cardClick(numId);
  }
});

function cardClick(cardId){
  cardNum = cardId.replace("card","");
  cardNum = parseInt(cardNum, 10);

  //if conditions - game is over, record value is 0, see if card is checked
  if(record[cardNum-1] == 0 && cardCheck == 0 && gameOver == false){
    //do the flipping
    front = document.getElementById("front" + cardNum);
    back = document.getElementById("back" + cardNum);

    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(-180deg)";
  }
  //3. Basic game - no randomization, not timer, just flipping, comparing and alert box for result

  cardTextRec.push(back.innerHTML);//<img src=........>
  cardRec.push(cardNum); //[1,2]

  flipIndex++;
  record[cardNum-1] = 1;

  if(flipIndex == 2){
    if(cardTextRex[0] == cardTextRex[1]){
      correct++;
      scoreEl.innerHTML = "Score: " + correct;
      cardRec = [];
      cardTextRex = [];
      flipIndex = 0;
    }
    else if(correct == 12){
      //display result and end game
      setTimeout(function(){displayResults();},600);
      gameOver = true;
    }
  }

  function displayResult(){

  }
}


























//4. make new game button work
//5. Randomize the game boxes on loading - also create images.js file
//6. Create timer
//7. make the fancy display for results
