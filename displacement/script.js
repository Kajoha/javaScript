const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const size = 400;

canvas.width = 400;
canvas.height = 400;


function circle() {

    const radius = 50;

    let xC = radius + Math.random() * (size - radius * 2);
    let yC = radius + Math.random() * (size - radius * 2);
    let directionXc = (Math.random() - 1.5) * 2;
    let directionYc = (Math.random() - 1.5) * 2;


    ctx.fillStyle = 'salmon';
    ctx.fill();

    if (xC + radius > size || xC - radius < 0) {
        directionXc = -directionXc;
    }

    if (yC + radius > size || yC - radius < 0) {
        directionYc = -directionYc;
    }

    xC += directionXc;
    yC += directionYc;

    ctx.beginPath();
    ctx.stroke();
    ctx.arc(xC, yC, 50, 0, Math.PI * 2, false);

}

function rect() {

    const length = 50;

    let x = length + Math.random() * (size - length * 2);
    let y = length + Math.random() * (size - length * 2);
    let directionX = (Math.random() - 2) * 2;
    let directionY = (Math.random() - 2) * 2;

    ctx.fillStyle = 'grey';
    ctx.fillRect(x, y, length, length);

    if (x + length > size || x - length < 0) {
        directionX = -directionX;
    }

    if (y + length > size || y - length < 0) {
        directionY = -directionY;
    }

    x += directionX;
    y += directionY;

}


function displacement() {

    requestAnimationFrame(displacement);
    ctx.clearRect(0, 0, size, size);
    circle();
    rect()
}

displacement();
