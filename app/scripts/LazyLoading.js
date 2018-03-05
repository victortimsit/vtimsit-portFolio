// class LazyLoading {
//     constructor(elementClassName, loadedClassName) {
//         this.elementClassName = elementClassName
//         this.loadedClassName = loadedClassName
//         this.parse()
//     }

//     parse() {
//         // Set variables
//         const $lazyLoads = document.querySelectorAll(`.${this.elementClassName}`)

//         console.log($lazyLoads)
//         for (const $lazyLoad of $lazyLoads) {
//             const $img = $lazyLoad
//             const $newImg = document.createElement('img')

//             $newImg.addEventListener('load', () => {
//                 $lazyLoad.classList.add(this.loadedClassName)
//             })

//             $newImg.src = $img.src
//         }
//     }
// }

class LazyLoading {
    constructor(elementClassName, loadedClassName) {
        this.elementClassName = elementClassName
        this.loadedClassName = loadedClassName
        this.$discoverProject = document.querySelector('.discoverProject')
        this.$presentationBlock = document.querySelector('.presentationBlock')
        this.parse()
    }

    parse() {
        // Set variables
        const $lazyLoads = document.querySelectorAll(`.${this.elementClassName}`)

        console.log($lazyLoads)
        for (const $lazyLoad of $lazyLoads) {
            const $img = $lazyLoad
            const $newImg = document.createElement('img')

            $newImg.addEventListener('load', () => {
                $lazyLoads[0].classList.add(this.loadedClassName)
                this.$discoverProject.onscroll = () => {
                    console.log('TOP: ' + $lazyLoads[2].scrollTop);

                    console.log(this.$discoverProject.scrollTop)
                    // if (this.$discoverProject.scrollTop > 150) {
                    //     $lazyLoads[2].classList.add(this.loadedClassName)
                    //     $lazyLoads[1].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 1000) {
                    //     $lazyLoads[3].classList.add(this.loadedClassName)
                    //     $lazyLoads[4].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 2400) {
                    //     $lazyLoads[5].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 3500) {
                    //     $lazyLoads[6].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 4800) {
                    //     $lazyLoads[7].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 5800) {
                    //     $lazyLoads[8].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 6400) {
                    //     $lazyLoads[9].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 7100) {
                    //     $lazyLoads[10].classList.add(this.loadedClassName)
                    // }

                    // if (this.$discoverProject.scrollTop > 7800) {
                    //     $lazyLoads[11].classList.add(this.loadedClassName)
                    // }
                    if (this.$discoverProject.scrollTop > 150) {
                        for(let i = 1; i <= 11; i++) {
                            $lazyLoads[i].classList.add(this.loadedClassName)
                        }
                    }
                }

            })
            $newImg.src = $img.src

        }
    }
}