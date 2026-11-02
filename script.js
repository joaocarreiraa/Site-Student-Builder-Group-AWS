// Carrossel Calouros
let indexCalouros = 0;
const slidesCalouros = document.querySelectorAll('.slide-calouros');
function updateCalouros() {
    slidesCalouros.forEach((slide, i) => {
        slide.style.opacity = i === indexCalouros ? '1' : '0';
    });
}
function nextCalouros() {
    indexCalouros = (indexCalouros + 1) % slidesCalouros.length;
    updateCalouros();
}
function prevCalouros() {
    indexCalouros = (indexCalouros - 1 + slidesCalouros.length) % slidesCalouros.length;
    updateCalouros();
}

// Carrossel Evento Inaugural
let indexInaugural = 0;
const slidesInaugural = document.querySelectorAll('.slide-inaugural');
function updateInaugural() {
    slidesInaugural.forEach((slide, i) => {
        slide.style.opacity = i === indexInaugural ? '1' : '0';
    });
}
function nextInaugural() {
    indexInaugural = (indexInaugural + 1) % slidesInaugural.length;
    updateInaugural();
}
function prevInaugural() {
    indexInaugural = (indexInaugural - 1 + slidesInaugural.length) % slidesInaugural.length;
    updateInaugural();
}

// Carrossel Community Day
let indexCD = 0;
const slidesCD = document.querySelectorAll('.slide-community-day');
function updateCD() {
    slidesCD.forEach((slide, i) => {
        slide.style.opacity = i === indexCD ? '1' : '0';
    });
}
function nextCD() {
    indexCD = (indexCD + 1) % slidesCD.length;
    updateCD();
}
function prevCD() {
    indexCD = (indexCD - 1 + slidesCD.length) % slidesCD.length;
    updateCD();
}

// Auto play independente a cada 5 segundos
setInterval(() => {
    nextCalouros();
    nextInaugural();
}, 5000);