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

/* load an example image */
const image = new Image();
image.src = "demo4_1.JPG";

/* Canvas a: before translation
   ----------------------------
*/
const canvas = document.querySelector('#canvas4');
const context = canvas.getContext('2d'); // -> CanvasRenderingContext2D object
// for clarity let's draw a border around the canvas
canvas.style.border = '1px solid grey';

image.addEventListener('load', (event) => {
    context.drawImage(image, 0, 0, 300, 450);
});

/* Canvas b: after translation
   ---------------------------
*/
const canvasB = document.querySelector('#canvas4b');
const contextB = canvasB.getContext('2d'); // -> CanvasRenderingContext2D object
canvasB.style.border = '1px solid pink';

const image2 = image;
image2.addEventListener('load', (event) => {
    // translate
    contextB.translate(-100, -150);
    // draw the image as before
    contextB.drawImage(image2, 0, 0, 300, 450);
});
