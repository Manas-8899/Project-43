

function setup() {

  angleMode(DEGREES)
  createCanvas(400,400);
  
}

function draw() {

  background(255,255,255);  
  translate(200,200);
  rotate(-90)

  h = hour();
  m = minute();
  s = second();

sAngle = map(s,0,60,0,360);
mAngle = map(m,0,60,0,360);
hAngle = map(h%12,0,12,0,360);

push();
rotate(sAngle);
stroke("black");
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mAngle);
stroke("red");
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(hAngle);
stroke("blue");
strokeWeight(7);
line(0,0,100,0);
pop();

stroke(255,0,255);
point(0,0)
strokeWeight(10);
noFill();
stroke("black")
arc(0,0,300,300,0,sAngle)

stroke("red")
arc(0,0,280,280,0,mAngle)

stroke("blue");
arc(0,0,260,260,0,hAngle)





  drawSprites();
}