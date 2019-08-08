
/*----- constants -----*/ 
// const missAudio = newAudio('onlinemp3'); 
// const hitAudio = newAudio('onlinemp3'); 
// const sinkAudio = newAudio('onlinemp3'); 
// const winnerAudio = newAudio('onlinemp3');

/*----- app's state (variables) -----*/ 
let score, miss, hit, sink, winner, currentShipId;
let shipValue = 0; 

var board1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]; 

var board2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];
 
// each player has all four ships that hold their length. They have a placed property & a name. 
var players = {
    "player1":{
      "ships":{
        "crusier":{
          "length":2,
          "isPlaced": false,
          "name":"crusier"
        },
        "battleship":{
          "length": 3,
          "isPlaced": false,
          "name":"battleship"
        },
        "destroyer":{
          "length": 4,
          "isPlaced": false,
          "name":"destroyer"
        },
        "rescue":{
          "length": 3,
          "isPlaced": false,
          "name":"rescue"
        },
      }
    },
    "cpu":{
        "ships":{
            "crusier":{
              "length":2,
              "isPlaced": false,
              "name":"crusier"
            },
            "battleship":{
              "length": 3,
              "isPlaced": false,
              "name":"battleship"
            },
            "destroyer":{
              "length": 4,
              "isPlaced": false,
              "name":"destroyer"
            },
            "rescue":{
              "length": 3,
              "isPlaced": false,
              "name":"rescue"
            },
          }
  }
};
// check if ship is placed or not with "p"  
// var p = players.cpu.ships.battleship.isPlaced

var shipPicked = false; 

/*----- cached element references -----*/ 
var vCrusierPic = document.getElementById('ship1v'); 
var vBattleshipPic = document.getElementById('ship2v'); 
var vDestroyerPic = document.getElementById('ship3v'); 
var vRescuePic = document.getElementById('ship4v'); 

/*----- event listeners -----*/
document.querySelectorAll('td').forEach(e => e.addEventListener("click", clickHandler));

// image clicks
vCrusierPic.addEventListener("click", imgClicks);
vBattleshipPic.addEventListener("click", imgClicks);
vDestroyerPic.addEventListener("click", imgClicks);
vRescuePic.addEventListener("click", imgClicks);

// give each ship their length attributes on click. 
var cruObjLength = players.cpu.ships.crusier.length;
var batObjLength = players.cpu.ships.battleship.length;
var desObjLength = players.cpu.ships.destroyer.length;
var resObjLength = players.cpu.ships.rescue.length;


/*----- functions -----*/
init(); 

function init() {

  isShipPicked();

} 

function render() {

} 

function isShipPicked() {
  // if any ship is clicked set shipPicked to true. 
if (shipValue > 0) {
  return true;
} else {
  return false; 
}
}

function imgClicks(e) {   
// get id of image. 
console.log(e.target.id); 
// currentShipId = e.target.id; 
shipValue = Number(e.target.id); 
//  add a fucntion that can place color inside the divs with eventlistner

}

// the function that runs when the event listner is called
function placeShip2(value){
  // check how many clicks left
  shipValue--
}

// I need to get thru board and get spot returned and set to "1" 
function lookForMarks(board1) {
  for (let i = 0; i < board1.length; i++) {
      for (let j = 0; j < board1[i].length; j++) {
        var current = document.getElementById(`${i}:${j}`)
        console.log(current,`${i}:${j}`)
        // if(current.style.backgroundColor == "red"){
        //   board1[i][j] = 1
        // }
      }
  }
console.log(board1)
}

// here me out OR...
function clickHandler(e) {
    console.log("you clicked");
    console.log(e.target.id); 
    placeShips(currentShipId); 

    document.getElementById(e.target.id).style.backgroundColor = "red";
    console.log(`${e.target.id.split('')[0]}:${parseInt(e.target.id.split('')[2]) + 1}`)
    for(var i = 0; i < shipValue; i++){
      document.getElementById(`${e.target.id.split('')[0]}:${parseInt(e.target.id.split('')[2]) + i}`).style.backgroundColor = "red";
    }

lookForMarks(board1);

}

function placeShips(n) {
// allow me to place ship. takes in ID number.
console.log(n);   

}

function rotate() {
// false means horizontal, true means verticle.
    var rotation = false; 
}

function checkHit() {

}

function checkWin() {

}

// function lookForMarks {


// }
