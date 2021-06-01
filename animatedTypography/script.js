const canvas = document.getElementById('thisCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const style = '100px "Tahoma';

function text() {
    ctx.font = style;
    ctx.fillText('Hello World!', 50, 100);
    ctx.shadowOffsetX = 0.5;
    ctx.shadowOffsetY = 0.2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'rgba(249, 115, 218, 0.8)';
    window.requestAnimationFrame(text);
}
window.requestAnimationFrame(text);