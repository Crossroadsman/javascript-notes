const statusText = document.querySelector('#status');
const codeText = document.querySelectorAll('code');

/* Notify that JS is ready
   -----------------------
*/
statusText.style.padding = '5px';
statusText.style.color = 'aquamarine';
statusText.style.backgroundColor = 'teal';
statusText.textContent = "js loaded!";

/* Configure <code>
   ----------------
*/
for (let i = 0; i < codeText.length; i++) {
    codeText[i].style.padding = '1px';
    codeText[i].style.paddingLeft = '3px';
    codeText[i].style.paddingRight = '3px';
    codeText[i].style.color = 'limegreen';
    codeText[i].style.backgroundColor = 'black';
}


/* Canvas a: selecting an image already on page
   --------------------------------------------
*/
const canvas = document.querySelector('#canvas3');
const context = canvas.getContext('2d'); // -> CanvasRenderingContext2D object
// for clarity let's draw a border around the canvas
canvas.style.border = '1px solid gold';

const images = document.images;
const image1 = images[0];
image1.addEventListener('load', (event) => {
    context.drawImage(image1, 0, 0);
});

/* Canvas b: scaling an image
   --------------------------
*/
const canvasB = document.querySelector('#canvas3b');
const contextB = canvasB.getContext('2d'); // -> CanvasRenderingContext2D object
canvasB.style.border = '1px solid pink';

image1.addEventListener('load', (event) => {
    contextB.drawImage(image1, 0, 0, canvasB.width, canvasB.height);
});

/* Canvas c: slicing an image
   --------------------------
*/
const canvasC = document.querySelector('#canvas3c');
const contextC = canvasC.getContext('2d'); // -> CanvasRenderingContext2D object
canvasC.style.border = '1px solid purple';

image1.addEventListener('load', (event) => {
    contextC.drawImage(image1, 1050, 200, 1280, 960, 0, 0, canvasC.width, canvasC.height);
});