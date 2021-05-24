const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ctx2 = canvas.getContext('2d');
const radius = 50;

canvas.width = 400;
canvas.height = 400;

let x = radius + Math.random() * (400 - radius * 2);
let y = radius + Math.random() * (400 - radius * 2);
let directionX = (Math.random() - 1.5) * 2;
let directionY = (Math.random() - 1.5) * 2;

function displacement() {

    requestAnimationFrame(displacement);

    ctx.clearRect(0, 0, 400, 400);

    if (x + radius > 400 || x - radius < 0) {

        directionX = -directionX;
    }

    if (y + radius > 400 || y - radius < 0) {

        directionY = -directionY;
    }

    x += directionX;
    y += directionY;

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.stroke();
}

displacement();
