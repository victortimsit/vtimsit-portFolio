const $slides = document.querySelectorAll('.slides')

let slidesNumber = 1

document.addEventListener('mousedown', () => 
{
    slidesNumber++

    $slides[slidesNumber - 1].classList.remove('slides--right')
    $slides[slidesNumber - 2].classList.add('slides--left')
})
