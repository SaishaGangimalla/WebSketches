function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
background(0);


let hr = hour()%12;
let mn = minute();
let sc = second();

/*fill(255);
noStroke();
text(hr+ ':' + mn + ':' +sc, 10, 200);
strokeWeight(8);
stroke(255);
noFill();
ellipse(200, 200, 300, 300);*/

strokeWeight(8);
stroke(255,100,150);
noFill();
let endSec = map(sc, 0, 60, 0, 360);
arc(200,200,300,300,0,endSec);

stroke(150,100,255);
let endMin = map(mn,0,60,0, 360);
arc(200,200, 280,280,0,endMin);

stroke(100,240,200);
let endHr = map(hr,0,12,0, 360);
arc(200,200,260,260,0,endHr);
}