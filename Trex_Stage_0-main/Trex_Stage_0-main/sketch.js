//types of data
//number
var num = 10;
console.log(num);

//string
var str = "Abdullah"
console.log(str);

//Boolean
var bool=true;
console.log(bool);

//undefined
var un;
console.log(un);

//null
un=null;
console.log(un);


var arr = [31,41,61,81,91];
console.log(arr)
console.log(arr[0])

var arr2 = ["Abdullah","Zenab","Anshul"]
console.log(arr2[2])

var arr3 = [55,"xyz",true];
console.log(arr3); 

var weight = [35,38,40,45]

var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  var sum=weight[0]+weight[1]+weight[2]+weight[3]
  var avg=sum/weight.length
  console.log(avg)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)

 trex.scale=0.5
 trex.x=50

 ground = createSprite(300,180,600,20)
 ground.velocityX=-6
 edges=createEdgeSprites();
}

function draw(){
  background("black")

  if(keyDown("space")){
trex.velocityY=-10
  }
  
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
drawSprites()
}