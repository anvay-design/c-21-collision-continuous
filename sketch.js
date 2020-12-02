var movingRectangle,fixedRectangle;

function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(400,200,80,30);
  fixedRectangle=createSprite(600,400,50,80);
  gameObject1=createSprite(100,300,50,50);
  gameObject2=createSprite(200,300,50,50);
  gameObject3=createSprite(300,300,50,50);
  gameObject4=createSprite(400,300,50,50);
  gameObject1.shapeColor="brown"
  gameObject2.shapeColor="aqua"
  gameObject3.shapeColor="pink"
  gameObject4.shapeColor="orange"
  movingRectangle.shapeColor="red"
  fixedRectangle.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingRectangle.x=mouseX
  movingRectangle.y=mouseY
  
  if (isTouching(movingRectangle,gameObject1)){
      movingRectangle.shapeColor="green";
      gameObject1.shapeColor="green";
    
    }
else{
  movingRectangle.shapeColor="yellow";
  gameObject1.shapeColor="yellow" ;
}
  
  drawSprites();

}
function isTouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object2.x<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
    return true;
    }
else{
 return false;
}
}