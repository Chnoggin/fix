//Create variables here
var dog, dogHappy;
var database;
var foodS, foodStock;
var count;

var dogImage;

function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dogImage = createSprite(250, 250);
  dogImage.addImage(dog);
  dogImage.addImage(dogHappy);

  var dataB = database.ref('Food');
  dataB.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if( keyWentDown(UP_ARROW)) {
  foodAte(count);
  dogImage.changeImage(dogHappy)
}


  drawSprites();
  //add styles here

}

function foodAte(x) {
  if(x<=0) {
    x = 0;
  }
  else {
    x=x - 1;
  }
 
  database.ref('/').update({
    Food: x 
  })
  }



function readStock(data) {
count = data.val();
}



