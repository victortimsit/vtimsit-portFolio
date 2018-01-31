class CursorParallax {
    constructor(cubes) {
        this.cubes = cubes
        this.amplitude = 0.5

        this.setItems()
        this.setMouse()
        this.setRequestAnimationFrame()
    }

    setItems() {
        const $element = this.cubes.camera
        this.item = {}

        this.item.$element = $element
        this.item.offsetX = 0
        this.item.offsetY = 0
        this.item.amplitude = parseFloat(this.amplitude)
    }

    setMouse() {
        this.mouse = {
            x: 0,
            y: 0
        }

        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight

        window.addEventListener('resize', (event) => {
            windowWidth = window.innerWidth
            windowHeight = window.innerHeight
        })

        window.addEventListener('mousemove', () => {
            this.mouse.x = event.clientX / windowWidth - 0.5
            this.mouse.y = event.clientY / windowHeight - 0.5
        })
    }

    setRequestAnimationFrame() {
        window.requestAnimationFrame(this.setRequestAnimationFrame.bind(this))
        const offsetX = - this.mouse.x * 100 * this.amplitude
        const offsetY = - this.mouse.y * 100 * this.amplitude

        // Easing
        this.item.offsetY += (offsetY - this.item.offsetY) * 0.05
        this.item.offsetX += (offsetX - this.item.offsetX) * 0.05
        
        const roundedOffsetX =  - Math.round(this.item.offsetX * 100) / 100
        const roundedOffsetY = Math.round(this.item.offsetY * 100) / 100 
        
        this.cubes.camera.position.x = roundedOffsetX
        this.cubes.camera.position.y = roundedOffsetY
    }
}