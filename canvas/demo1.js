const statusText = document.querySelector('#status');

statusText.style.padding = '5px';
statusText.style.color = 'aquamarine';
statusText.style.backgroundColor = 'teal';
statusText.textContent = "js loaded!";


const canvas = document.querySelector('#canvas1');
// all <canvas> elements have a context
const context = canvas.getContext('2d'); // -> CanvasRenderingContext2D object

// for clarity let's draw a border around the canvas
canvas.style.border = '1px solid black';

// now let's draw into the context
context.fillStyle = 'rgb(200, 0, 0)';
context.fillRect(110, 30, 50, 50) // x1, y1, w, h

context.fillStyle = 'rgba(0, 0, 200, 0.5)';
context.fillRect(135, 55, 50, 50) // x1, y1, w, h
