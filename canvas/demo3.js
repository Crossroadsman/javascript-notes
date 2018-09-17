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
    context.drawImage(image1, 0, 0, canvas.width, canvas.height);
});
console.log(image1);


