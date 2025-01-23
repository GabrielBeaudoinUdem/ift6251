let aviciiFont;

function preload() {
    aviciiFont = loadFont('./font/vermin-vibes-2-soft-font/VerminVibes2Soft-grr4.ttf');
}

function setup() {
    let div = createDiv();
    let canvas = createCanvas(800, 800);
    canvas.parent(div);
    div.style('text-align', 'center');
    background(255);
}

function draw() {
    background(255);

    // clip (inverse couleur)
    // mask (plusieur couche)

    fill(0);
    textFont(symbol_that_put_toghter_have_meaning);
    textSize(128);
    textAlign(CENTER, TOP);
    text('U', width / 2 - 42-13, 10);
    text('P', width / 2 + 42+13, 10);
    text('ASCII', width / 2, height - 142);
    text('#'+album_number, width -42-13, height - 10);  
    noLoop();
}