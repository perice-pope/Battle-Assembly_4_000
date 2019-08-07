
/*----- constants -----*/ 
// const missAudio = newAudio('onlinemp3'); 
// const hitAudio = newAudio('onlinemp3'); 
// const sinkAudio = newAudio('onlinemp3'); 
// const winnerAudio = newAudio('onlinemp3');

/*----- app's state (variables) -----*/ 
let score, miss, hit, sink, winner, currentShipId; 

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
    [0,0,0,0,0,0,0,0,0,0],
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

} 

function render() {

} 

function imgClicks(e) {   
// get id of image. 
console.log(e.target.id); 
currentShipId = e.target.id; 
}

// here me out OR...
function clickHandler(e) {
    console.log("you clicked");
    console.log(e.target.id); 
    placeShips(currentShipId); 
    document.getElementById(e.target.id).style.backgroundColor = "red";

    var ele = e.target.id; 
    console.log(Element.closest(ele)); 
   
    //now find the index to the left & affect it according to the currentShipId. 
    // if (currentShipId === 2) {
    // ele = ele.closest(ele);
    // } else if (currentShip === 3) {
    // closet 3 elements }
    // bla bla bla 
    // else if (currentShip === 4)
    // closet 4 elements
    // else (currentShip === 5)
    // closet 5 elements  
}

function placeShips(n) {
// allow me to place ship. takes in ID number.
console.log(n);   
// on click of spot on board, place n amount of markers starting at that idx.
// so get that idx or spot on the board.   
// board[0][0] while n = 2 place markers on board 00 and b01 

}

function rotate() {
// false means horizontal, true means verticle.
    var rotation = false; 
}
