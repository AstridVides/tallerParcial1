//cuerpo
let preveiwContainer = document.querySelector('.products-preview');
let preveiwBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        preveiwBox.forEach(preveiw =>{
            let target = preveiw.getAttribute('data-target');
            if (name == target) {
                preveiw.classList.add('active');
                
            }
        }); 
    };
});

preveiwBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };  
});

//logo
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

//slider
const sliderTests = document.querySelectorAll('.slider-test');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    sliderTests[currentSlide].classList.remove('activo');
    currentSlide = (currentSlide + 1) % sliderTests.length;
    sliderTests[currentSlide].classList.add('activo');
});

document.getElementById('prevBtn').addEventListener('click', () => {
    sliderTests[currentSlide].classList.remove('activo');
    currentSlide = (currentSlide - 1 + sliderTests.length) % sliderTests.length;
    sliderTests[currentSlide].classList.add('activo');
});
