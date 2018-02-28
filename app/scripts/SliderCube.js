class SliderCube {
    constructor(sliderName__item, rotationY, rotationX) {
        // Set properties
        this.sliderName__item = sliderName__item
        this.rotation = {
            yPos: rotationY,
            yNeg: (-1) * rotationY,
            xPos: rotationX,
            xNeg: (-1) * rotationX
        }

        // Set DOM elements
        this.$slides = document.querySelectorAll(this.sliderName__item)
        this.$next = document.querySelectorAll('.cubeSlider_3__item__button__next')
        this.$prev = document.querySelectorAll('.cubeSlider_3__item__button__prev')
        this.$firstProject = document.querySelector('.alerts__firstProject')
        this.$lastProject = document.querySelector('.alerts__lastProject')

        // Set counter
        this.slidesNumber = 1

        // Add slide style
        for (const $slide of this.$slides) {
            $slide.style.opacity = 0
            $slide.style.transformOrigin = `50% 50% ${-$slide.offsetWidth / 2}px`
            $slide.style.transform = `rotateY(${this.rotation.yPos}deg)  rotateX(${this.rotation.xPos}deg)` // Set slide transformations
        }

        // First slide visible 
        this.$slides[0].style.opacity = 1
        this.$slides[0].style.transform = `rotateY(0deg) rotateX(0deg)`

        for (const next of this.$next) {
            // Listening mousedown 
            next.addEventListener('mousedown', () => {
                if (this.slidesNumber < this.$slides.length) {
                    this.slidesNumber++

                    this.$slides[this.slidesNumber - 1].style.opacity = 1
                    this.$slides[this.slidesNumber - 1].style.transform = `rotateY(0deg) rotateX(0)`

                    this.$slides[this.slidesNumber - 2].style.opacity = 0
                    this.$slides[this.slidesNumber - 2].style.transform = `rotateY(${this.rotation.yNeg}deg) rotateX(${this.rotation.xNeg}deg)`
                }
                else {
                    this.$lastProject.classList.add('alerts__Project--active')
                    setTimeout(() => {
                        this.$lastProject.classList.remove('alerts__Project--active')
                    }, 300)
                }
            })
        }

        for (const prev of this.$prev) {
            // Listening mousedown 
            prev.addEventListener('mousedown', () => {
                if(this.slidesNumber > 1) {
                    this.slidesNumber--
    
                    this.$slides[this.slidesNumber].style.opacity = 0
                    this.$slides[this.slidesNumber].style.transform = `rotateY(${-this.rotation.yNeg}deg) rotateX(${-this.rotation.xNeg}deg)`
    
                    this.$slides[this.slidesNumber - 1].style.opacity = 1
                    this.$slides[this.slidesNumber - 1].style.transform = `rotateY(0deg) rotateX(0)`
                }
                else {
                    this.$firstProject.classList.add('alerts__Project--active')
                    setTimeout(() => {
                        this.$firstProject.classList.remove('alerts__Project--active')
                    }, 300)
                }
            })
        }
    }
}
