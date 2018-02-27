class Slider {
    constructor() {
        this.$work = document.querySelector('.navigationMenu__work')
        this.$aboutMe = document.querySelector('.navigationMenu__aboutMe')
        this.$contact = document.querySelector('.navigationMenu__contact')

        this.$navigationMenuItems = document.querySelectorAll('.navigationMenu__item')
        this.$workBulleted = document.querySelector('.navigationMenu__work__bulleted')
        this.$aboutMeBulleted = document.querySelector('.navigationMenu__aboutMe__bulleted')
        this.$contactBulleted = document.querySelector('.navigationMenu__contact__bulleted')

        this.$slides = document.querySelectorAll('.js-slide')
        this.$spheres = document.querySelectorAll('.sphere')

        this.work = true
        this.aboutMe = false
        this.contact = false
        this.transition = false

        for (const $navigationMenuItem of this.$navigationMenuItems) {
            // Scale effect on mouseover
            $navigationMenuItem.addEventListener('mouseover', () => {
                $navigationMenuItem.style.transform = 'scale(1.2)'
                $navigationMenuItem.addEventListener('mouseleave', () => {
                    $navigationMenuItem.style.transform = 'scale(1)'
                })
            })
            // Scale effect on mousedown
            $navigationMenuItem.addEventListener('mousedown', () => {
                $navigationMenuItem.style.transform = 'scale(0.8)'
                window.addEventListener('mouseup', () => {
                    $navigationMenuItem.style.transform = 'scale(1)'
                })
            })
        }

        // Update style when mousedown on work
        this.$work.addEventListener('mousedown', () => {
            this.work = true
            this.aboutMe = false
            this.contact = false

            // Disable transition delay after slide transition
            for(const sphere of this.$spheres) {
                setTimeout(() => {
                    sphere.classList.remove('slider__element')
                    sphere.classList.add('js-cursor-parallax')
                }, 1300)
            }

            // Work
            this.$work.classList.add('navigationMenu__item--active')
            this.$work.classList.remove('navigationMenu__item')

            // Work bulleted
            this.$workBulleted.classList.add('navigationMenu__bulleted--active')
            this.$workBulleted.classList.remove('navigationMenu__bulleted')

            // About me
            this.$aboutMe.classList.add('navigationMenu__item')
            this.$aboutMe.classList.remove('navigationMenu__item--active')

            // About me bulleted
            this.$aboutMeBulleted.classList.add('navigationMenu__bulleted')
            this.$aboutMeBulleted.classList.remove('navigationMenu__bulleted--active')

            // Contact
            this.$contact.classList.add('navigationMenu__item')
            this.$contact.classList.remove('navigationMenu__item--active')

            // Contact bulleted
            this.$contactBulleted.classList.add('navigationMenu__bulleted')
            this.$contactBulleted.classList.remove('navigationMenu__bulleted--active')

            this.$slides[0].classList.remove('slide--top')
        })

        // Update style when mousedown on aboutMe
        this.$aboutMe.addEventListener('mousedown', () => {
            this.work = false
            this.aboutMe = true
            this.contact = false

            // Able transition delay before slide transition
            for(const sphere of this.$spheres) {
                sphere.classList.remove('js-cursor-parallax')
                sphere.classList.add('slider__element')
            }
            // Work
            this.$work.classList.add('navigationMenu__item')
            this.$work.classList.remove('navigationMenu__item--active')

            // Work bulleted
            this.$workBulleted.classList.add('navigationMenu__bulleted')
            this.$workBulleted.classList.remove('navigationMenu__bulleted--active')

            // About me
            this.$aboutMe.classList.add('navigationMenu__item--active')
            this.$aboutMe.classList.remove('navigationMenu__item')

            // About me bulleted
            this.$aboutMeBulleted.classList.add('navigationMenu__bulleted--active')
            this.$aboutMeBulleted.classList.remove('navigationMenu__bulleted')

            // Contact
            this.$contact.classList.add('navigationMenu__item')
            this.$contact.classList.remove('navigationMenu__item--active')

            // Contact bulleted
            this.$contactBulleted.classList.add('navigationMenu__bulleted')
            this.$contactBulleted.classList.remove('navigationMenu__bulleted--active')

            this.$slides[0].classList.add('slide--top')

        })

        // Update style when mousedown on contact
        this.$contact.addEventListener('mousedown', () => {
            this.work = false
            this.aboutMe = false
            this.contact = true

            // Work
            this.$work.classList.add('navigationMenu__item')
            this.$work.classList.remove('navigationMenu__item--active')

            // Work bulleted
            this.$workBulleted.classList.add('navigationMenu__bulleted')
            this.$workBulleted.classList.remove('navigationMenu__bulleted--active')

            // About me
            this.$aboutMe.classList.add('navigationMenu__item')
            this.$aboutMe.classList.remove('navigationMenu__item--active')

            // About me bulleted
            this.$aboutMeBulleted.classList.add('navigationMenu__bulleted')
            this.$aboutMeBulleted.classList.remove('navigationMenu__bulleted--active')

            // Contact
            this.$contact.classList.add('navigationMenu__item--active')
            this.$contact.classList.remove('navigationMenu__item')

            // Contact bulleted
            this.$contactBulleted.classList.add('navigationMenu__bulleted--active')
            this.$contactBulleted.classList.remove('navigationMenu__bulleted')
        })
    }
}