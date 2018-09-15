const image_input = document.querySelector('#file');
const image_output = document.querySelector('#output');
const status_text = document.querySelector('#status_text');

image_input.addEventListener('change', (event) => {
    image_output.src = URL.createObjectURL(event.target.files[0]);
    status_text.textContent = "Image changed!"
});
