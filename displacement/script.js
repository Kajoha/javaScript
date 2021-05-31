const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const radius = 50;

canvas.width = 400;
canvas.height = 400;

let xC = radius + Math.random() * (400 - radius * 2);
let yC = radius + Math.random() * (400 - radius * 2);
let directionXc = (Math.random() - 1.5) * 2;
let directionYc = (Math.random() - 1.5) * 2;


let xP = 75 + Math.random() * (400 - 75 * 2);
let yP = 75 + Math.random() * (400 - 75 * 2);
let directionXr = (Math.random() - 2) * 2;
let directionYr = (Math.random() - 2) * 2;

function displacement() {

    requestAnimationFrame(displacement);
    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = 'salmon';
    ctx.fill();

    ctx.fillStyle = 'grey';
    ctx.fillRect(xP, yP, 75, 75);

    if (xC + radius > 400 || xC - radius < 0) {
        directionXc = -directionXc;
    }

    if (yC + radius > 400 || yC - radius < 0) {
        directionYc = -directionYc;
    }

    xC += directionXc;
    yC += directionYc;


    if (xP + 75 > 400 || xP - 75 < 0) {
        directionXr = -directionXr;
    }

    if (yP + 75 > 400 || yP - 75 < 0) {
        directionYr = -directionYr;
    }

    xP += directionXr;
    yP += directionYr;

    ctx.beginPath();
    ctx.arc(xC, yC, 50, 0, Math.PI * 2, false);
    ctx.stroke();
}

displacement();
