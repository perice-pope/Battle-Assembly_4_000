// alert('job'); 


/*----- constants -----*/ 
// const missAudio = newAudio('onlinemp3'); 
// const hitAudio = newAudio('onlinemp3'); 
// const sinkAudio = newAudio('onlinemp3'); 
// const winnerAudio = newAudio('onlinemp3');

/*----- app's state (variables) -----*/ 
let score, miss, hit, sink, winner; 

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


/*----- cached element references -----*/ 
var vCrusierPic = document.getElementById('ship1v'); 

/*----- event listeners -----*/
document.querySelectorAll('td')
.forEach(e => e.addEventListener("click", clickHandler));

// image clicks
vCrusierPic.addEventListener("click", imgClicks);

// give each ship their length attributes on click. 
var shipObjLength = players.cpu.ships.crusier.length;
 



/*----- functions -----*/
init(); 

function init() {

} 

function render() {

} 

function imgClicks() {
// assign length to image. to move to board... 
console.log(shipObjLength);   

}

// here me out OR...
function clickHandler() {
    // should be on each td box broooo... 
    console.log("clicked"); 
}

function placeShips(ships, x, y) {

}

function rotate() {
// false means horizontal, true means verticle.
    var rotation = false; 
}
