class Canvas {
    constructor(width = 400, height = 400) {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
    }

    drawCircle(c) {
        this.ctx.beginPath();
        this.ctx.arc(c.position.x, c.position.y, c.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fillStyle = c.color;
        this.ctx.fill();
    }

    drawRect(r) {
        this.ctx.beginPath();
        this.ctx.rect(r.position.x, r.position.y, r.position.width, r.position.height);
        this.ctx.closePath();
        this.ctx.fillStyle = r.color;
        this.ctx.fill();
    }

    displacement() {
        if (this.directionX >= canvas.width || this.directionX <= 0) {
            this.velocityX = -this.velocityX;
        }

        if (this.directionY >= canvas.width || this.directionY <= 0) {
            this.velocityY = -this.velocityY;
        }

        this.positionX += this.directionX;
        this.positionY += this.directionY;
    }
}

class Circle {
    constructor(x, y, color, radius) {
        this.color = color;
        this.position = { x: x, y: y };
        this.radius = radius;
    }
}

class Rect {
    constructor(x, y, w, h, color) {
        this.color = color;
        this.position = { x: x, y: y, width: w, height: h };
    }
}

class Movement {
    constructor(radius) {
        this.direction = radius + Math.random() * (400 - radius * 2);
        this.direction = radius + Math.random() * (400 - radius * 2);
        this.velocityX = (Math.random() - 1.5) * 2;
        this.velocityY = (Math.random() - 1.5) * 2;
    }
}

const canvas = new Canvas();
const circle = new Circle(30, 30, 'red', 20);
const movementC = new Movement(20);
canvas.drawCircle(circle);
canvas.displacement(movementC);

const rect = new Rect(100, 50, 30, 30, 'blue');
const movementR = new Movement(30);
canvas.drawRect(rect);
canvas.displacement(movementR);


/*
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
*/
