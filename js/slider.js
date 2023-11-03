'use strict'
let modal = document.querySelector('.modal')
let openpopap = document.querySelector('.button-open')
let closePopupButton = document.querySelector('.button-close')

openpopap.addEventListener('click', function (evt) {
    evt.preventDefault()
    modal.classList.add('modal--show')
})
closePopupButton.addEventListener('click', function () {
	modal.classList.remove('modal--show')
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == "27") {
        modal.classList.remove('modal--show')
    }
})

let forma = document.querySelector('.form')

forma.oninput = function() {
    let FIO = forma["fname"];
    let Number = forma["number"];
    if (FIO.checkValidity()&& Number.checkValidity()) {
        openpopap.removeAttribute('disabled')
    }
    else{
        openpopap.setAttribute('disabled', 'disabled')
    }
}

let img = (offset)=>{
    let activeSlide = document.querySelector("[data-active]")
    let slides = [...document.querySelectorAll(".slide")]
    let currentIndex = slides.indexOf(activeSlide)
    let newIndex = currentIndex + offset;
    
    if(newIndex < 0) newIndex = slides.length - 1
    if(newIndex >= slides.length) newIndex = 0
    console.log(slides)
    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active
}

let onNext = ()=> img(1)
let onPrev = ()=> img(-1)
let image = (offset)=>{
    let slide_box = document.querySelector(".slide_box[data-active]")
    let slides_block = [...document.querySelectorAll(".slide_box")]
    let currentIndex = slides_block.indexOf(slide_box)
    let twoIndex = currentIndex + offset;
    
    if(twoIndex < 0) twoIndex = slides_block.length - 1
    if(twoIndex >= slides_block.length) twoIndex = 0
    console.log(slides_block)
    slides_block[twoIndex].dataset.active = true;
    delete slide_box.dataset.active
}

let oneNext = ()=> image(1)
let onePrev = ()=> image(-1)