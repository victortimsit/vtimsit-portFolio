class SliderCube 
{
    constructor(sliderName__item, slideWidth, slideHeight, rotationY, rotationX) 
    {
        // Set properties
        this.sliderName__item = sliderName__item
        this.slideWidth = slideWidth
        this.slideHeight = slideHeight
        this.rotation = {
            yPos: rotationY,
            yNeg: (-1) * rotationY,
            xPos: rotationX,
            xNeg: (-1) * rotationX
        }

        // Set DOM elements
        this.$slides = document.querySelectorAll(this.sliderName__item)

        // Set counter
        this.slidesNumber = 1

        // Add slide style
        for(const $slide of this.$slides) {
            $slide.style.width = `${this.slideWidth}px` // Set slide width
            $slide.style.height = `${this.slideHeight}px` // Set slide height

            $slide.style.left = `${- this.slideWidth / 2}px` // Set slide left
            $slide.style.top = `${- this.slideHeight / 2}px` // Set slide top

            $slide.style.opacity = 0 
            $slide.style.transform = `rotateY(${this.rotation.yPos}deg)  rotateX(${this.rotation.xPos}deg) translateZ(${this.slideWidth / 2}px)` // Set slide transformations
        }

        // First slide visible 
        this.$slides[0].style.opacity = 1
        this.$slides[0].style.transform = `rotateY(0deg) rotateX(0deg) translateZ(${this.slideWidth / 2}px)`

        // Listening mousedown 
        document.addEventListener('mousedown', () => {
            this.slidesNumber++

            this.$slides[this.slidesNumber - 1].style.opacity = 1
            this.$slides[this.slidesNumber - 1].style.transform = `rotateY(0deg) rotateX(0) translateZ(${this.slideWidth / 2}px)`

            this.$slides[this.slidesNumber - 2].style.opacity = 0
            this.$slides[this.slidesNumber - 2].style.transform = `rotateY(${this.rotation.yNeg}deg) rotateX(${this.rotation.xNeg}deg) translateZ(${this.slideWidth / 2}px)`
        })
    }
}
