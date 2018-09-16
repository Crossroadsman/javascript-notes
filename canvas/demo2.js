const statusText = document.querySelector('#status');

statusText.style.padding = '5px';
statusText.style.color = 'aquamarine';
statusText.style.backgroundColor = 'teal';
statusText.textContent = "js loaded!";


const canvas = document.querySelector('#canvas2a');
const context = canvas.getContext('2d'); // -> CanvasRenderingContext2D object

// for clarity let's draw a border around the canvas
canvas.style.border = '1px solid blue';

context.fillStyle = 'rgba(200, 0, 0, 0.5)';
context.fillRect(10, 10, 180, 130); // x1, y1, w, h

context.strokeStyle = 'rgba(0, 200, 0, 0.5)';
context.strokeRect(70, 40, 180, 130);

context.clearRect(40, 100, 50, 50)



const canvas_b = document.querySelector('#canvas2b');
const context_b = canvas_b.getContext('2d');
canvas_b.style.border = '1px solid red';

context_b.fillStyle = 'rgba(0, 200, 0, 0.5)';
context_b.beginPath();
context_b.moveTo(150, 20);
context_b.lineTo(275, 180);
context_b.lineTo(80, 180);
context_b.closePath(); // this is optional for fill()) but required for stroke())
context_b.fill();

context_b.strokeStyle = 'rgba(0, 0, 200, 0.5';
context_b.beginPath();
context_b.moveTo(50, 20);
context_b.lineTo(150, 100);
context_b.lineTo(20, 180);
context_b.closePath();
context_b.stroke();



const canvas_c = document.querySelector('#canvas2c');
const context_c = canvas_c.getContext('2d');
canvas_c.style.border = '1px solid green';

const yellow = 'rgba(230, 220, 0, 0.9';
const black = 'rgba(1, 1, 1, 0.99)';
const center_x = canvas.width / 2;
const center_y = canvas.height / 2;
const eye_height = canvas.height * 2/5;
const eye_x_offset = canvas.width * 0.08;
let radius = 50;
let start_angle = 0; // radians 0 is 3 o'clock
let end_angle = Math.PI * 2; // radians
const counterclockwise = true;

context_c.beginPath();
context_c.arc(center_x, center_y, radius, start_angle, end_angle);
context_c.fillStyle = yellow;
context_c.fill();
context_c.lineWidth = 5;
context_c.strokeStyle = black;
context_c.stroke();

context_c.beginPath();
context_c.arc(center_x, center_y, radius * 0.7, start_angle, end_angle / 2);
context_c.stroke();

context_c.fillStyle = black;
context_c.beginPath(); // resets path so that the fill doesn't fill the mouth
context_c.arc(center_x - eye_x_offset, eye_height, radius * 0.15, start_angle, end_angle);
//context_c.fill();
//context_c.moveTo(center_x + eye_x_offset, eye_height); // prevents line being drawn between eyes
context_c.arc(center_x + eye_x_offset, eye_height, radius * 0.15, start_angle, end_angle);
context_c.fill();


