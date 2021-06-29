img = "";

    function preload() {
        img = loadImage('dog_cat.jpg');
    }

function setup() {
    canvas = createCanvas (650, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420); 
    fill("#800080");
    text("Dog", 45, 75);
    noFill();
    stroke("#800080");
    rect(30,60,450,350);
}