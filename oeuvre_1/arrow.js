let bidule_qui_fait_des_bruits;

function draw_fleche_qui_pointe_par_la() {
    x = width / 2
    y = height / 2 - height/5
    angle = radians(180);
    let arrowWidth = 40;
    
    push();
    translate(x, y);
    rotate(angle);
    fill(0);
    noStroke();
    rect(-arrowWidth / 2, -200, arrowWidth, 200);
    triangle(-arrowWidth / 2 - 20, 0, arrowWidth / 2 + 20, 0, 0, 60);
    pop();
}

function draw_une_fleches_qui_pointe_a_quelque_part_qui_n_est_pas_la(){
    let mainArrowTop = height / 2 - height / 5 - 40;
    let mainArrowBottom = height / 2 - height / 5 + 200;
    // bidule_qui_fait_des_bruits.start();
    // bidule_qui_fait_des_bruits.freq(random(200, 800));
    
        let arrowHeight = random(mainArrowTop, mainArrowBottom);
        let arrowWidth = random(10, 50);
        let arrowLength = random(50, 150);
        let direction = random() > 0.5 ? 1 : -1;

        push();
        translate(width / 2 + random(-97, 97), arrowHeight);
        fill(255);// fill(0);
        noStroke();
        rect(0, -arrowWidth / 2, direction * arrowLength, arrowWidth);
        triangle(direction * arrowLength, -arrowWidth / 2 - 10, direction * arrowLength, arrowWidth / 2 + 10, direction * arrowLength + direction * 20, 0);
        pop();
}

function setup() {
    let div = createDiv();
    let canvas = createCanvas(400, 400);
    canvas.parent(div);
    div.style('text-align', 'center');
    div.style('margin-top', '15%');
    background(255);

    // bidule_qui_fait_des_bruits = new p5.Oscillator();
    // bidule_qui_fait_des_bruits.start();
    // bidule_qui_fait_des_bruits.freq(200);
}

function draw() {
    background(255);
    draw_fleche_qui_pointe_par_la();


    nbArrow = random(5, 21);
    for (let i = 0; i < nbArrow; i++) {
        // setTimeout(() => {
            draw_une_fleches_qui_pointe_a_quelque_part_qui_n_est_pas_la();
        // }, 200*i);
    }
    // setTimeout(() => {
        // bidule_qui_fait_des_bruits.stop();
    // }, 200*nbArrow+50);
        
    noLoop();

}


