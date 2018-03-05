class LazyLoading {
    constructor(elementClassName, loadedClassName) {
        this.elementClassName = elementClassName
        this.loadedClassName = loadedClassName
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
                $lazyLoad.classList.add(this.loadedClassName)
            })

            $newImg.src = $img.src
        }
    }
}