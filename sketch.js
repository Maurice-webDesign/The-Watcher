let rainDrops = 255;
let rainDrops2 = 255;
let rainDrops3 = 255;
let rainDrops4 = 255;
let rainDrops5 = 255;
let rainDrops6 = 255;
let rainDrops7 = 255;
let rainDrops8 = 255;
let rainDrops9 = 255;
let rainDrops10 = 255;
let rainDrops11 = 255;
let rainDrops12 = 255;
let rainDrops13 = 255;
let rainDrops14 = 255;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 173, 230);
  
  fill(109, 212, 97);
  noStroke();
  rect(0, 300, 400, 100);
  
  //Body
  fill(0,0,0);
  rect(160, 100, 70, 150);
  
  //Clouds
  fill(237, 241, 242);
  ellipse(150, 230, 100, 50);
  ellipse(180, 235, 100, 50);
  ellipse(205, 230, 100, 50);
  ellipse(230, 235, 100, 50);
  ellipse(240, 230, 100, 50);
  
  //Head
  fill(228, 232, 12);
  strokeWeight(6);
  stroke(0,0,0)
  ellipse(195, 90, 100, 100);
  
  //Eye
  fill(237, 241, 242)
  ellipse(200, 90, 30, 50);
  
  noStroke();
  fill(12, 177, 232);
  ellipse(200, 90, 20, 25)
  
  //Rain
  fill(5, 61, 245);
  rect(130, rainDrops, 3, 25);
  rect(150, rainDrops2, 3, 25);
  rect(140, rainDrops3, 3, 25);
  rect(160, rainDrops4, 3, 25);
  rect(170, rainDrops5, 3, 25);
  rect(180, rainDrops6, 3, 25);
  rect(190, rainDrops7, 3, 25);
  rect(200, rainDrops8, 3, 25);
  rect(210, rainDrops9, 3, 25);
  rect(220, rainDrops10, 3, 25);
  rect(230, rainDrops11, 3, 25);
  rect(240, rainDrops12, 3, 25);
  rect(250, rainDrops13, 3, 25);
  rect(260, rainDrops14, 3, 25);
  
  
  
  
  rainDrops = rainDrops + 4.5;
  rainDrops2 = rainDrops2 + 4.5;
  rainDrops3 = rainDrops3 + 4.5;
  rainDrops4 = rainDrops4 + 4.5;
  rainDrops5 = rainDrops5 + 4.5;
  rainDrops6 = rainDrops6 + 4.5;
  rainDrops7 = rainDrops7 + 4.5;
  rainDrops8 = rainDrops8 + 4.5;
  rainDrops9 = rainDrops + 4.5;
  rainDrops10 = rainDrops + 4.5;
  rainDrops11 = rainDrops11 + 4.5;
  rainDrops12 = rainDrops12 + 4.5;
  rainDrops13 = rainDrops13 + 4.5;
  rainDrops14 = rainDrops14 + 4.5;
  console.log(rainDrops);

  if (rainDrops >= 350)
    
    {
      rainDrops = 255;
    }
  
  if (rainDrops2 >= 350)
    
    {
      rainDrops2 = 250;
    }
  
  if (rainDrops3 >= 350)
    
    {
      rainDrops3 = 263;
    }
  
  if (rainDrops4 >= 350)
    
    {
      rainDrops4 = 300;
    }
  
  if (rainDrops5 >= 350)
    
    {
      rainDrops5 = 265;
    }
  
  if (rainDrops6 >= 350)
    
    {
      rainDrops6 = 260;
    }
  
  if (rainDrops7 >= 350)
    
    {
      rainDrops7 = 270;
    }
  
  if (rainDrops8 >=350)
    
    {
      rainDrops8 =272;
    }
  
  if (rainDrops9 >= 350)
    
    {
      rainDrops9 = 268;
    }
  
  if (rainDrops10 >= 350)
    
    {
      rainDrops10 = 255;
    }
  
  if (rainDrops11 >= 350)
    
    {
      rainDrops11 = 262;
    }
  
  if (rainDrops12 >= 350)
    
    {
      rainDrops12 = 273;
    }
  
  if (rainDrops13 >= 350)
    
    {
      rainDrops13 = 278;
    }
  
  if (rainDrops14 >= 350)
    
    {
      rainDrops14 = 268; 
    }
  
}