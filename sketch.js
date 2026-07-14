let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    rectMode(CENTER);
    angleMode(DEGREES);
    background(155, 249, 226);
    textSize(24);

    // Abstract Art
    /* textAlign(CENTER, CENTER);
    text("Brave, not perfect", width / 2, height / 2);
    ellipse(60, 320, 100, 150);
    line(200, 400, 500, 400);
    rect(200, 200, 120, 40);
    arc(320, 50, 100, 100, 0, 180);
    textSize(30);
    text("Sushmita", 300, 390);
    textSize(15);
    text("This is a piece of art\nwe created to practice\ndrawing shapes and\ntext to a p5.js sketch.", 120, 75) */

    // Face
    fill("BurlyWood");
    ellipse(width / 2, height / 2, 175, 200);

    // Eyes
    fill("brown");
    stroke("white");
    strokeWeight(5);
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);

    // Pupils
    stroke("black");
    strokeWeight(1);
    fill("black");
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);

    // Mouth
    fill("pink");
    arc(200, 230, 50, 50, 0, 180);

    // Text
    fill("black");
    textSize(15);
    text("We will customize this text later on in the project\nto reflect your avatar.", 25, 50);
}