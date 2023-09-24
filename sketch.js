
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55,54,61); 
  stroke(255);   
 

  let numPoints = 100;

  for (let i = 0; i < numPoints; i++) {
    let x = random(width); // inside canvas
    let y = random(height); // inside canvas
    let centerX = width / 2;  // inside canvas center
    let centerY = height / 2; // inside canvas center
    
    let choice = int(random(10)); //a random line to draw

    if (choice === 1) line(0, 0, x, y);//from top left
    else if (choice === 2) line(width, 0, x, y);//from top right
    else if (choice === 3) line(0, height, x, y);//bottom left
    else if (choice === 4) line(width, height, x, y);//bottom right

    else if (choice === 5) line(centerX, 0, x, y);//from the center of the top edge
    else if (choice === 6) line(width, centerY, x, y);//from the center of the right edge
    else if (choice === 7) line(centerX, height, x, y);//from the center of the bottom edge
    else if (choice === 8) line(0, centerY, x, y);//from the center of the left edge
    
    else {
      line(centerX, centerY, x, y);//from the center of the canvas
  }
}
}