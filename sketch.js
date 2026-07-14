function setup() {
    createCanvas(400, 400);
}

function draw() {
    rectMode(CENTER);
    angleMode(DEGREES);
    background(255, 249, 226);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Brave, not perfect", width / 2, height / 2);
    ellipse(60, 320, 100, 150);
    line(200, 400, 500, 400);
    rect(200, 200, 120, 40);
    arc(320, 50, 100, 100, 0, 180);
    textSize(30);
    text("Sushmita", 300, 390);
    textSize(15);
    text("This is a piece of art\nwe created to practice\ndrawing shapes and\ntext to a p5.js sketch.", 120, 75)
}