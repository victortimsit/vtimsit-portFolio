class WavesCanvasProject {
    constructor(amplitudeX, amplitudeY, speed) {
        this.$body = document.querySelector('body')
        this.$projectsPage = document.querySelectorAll('.presentationBlock')
        this.$canvas = document.createElement('canvas')
        this.context = this.$canvas.getContext('2d')

        this.amplitude = {
            x: amplitudeX,
            y: amplitudeY
        }

        this.speed = speed
    
        setTimeout(() => {
            this.$canvas.width = this.$projectsPage[0].offsetWidth
            this.$canvas.height = this.$projectsPage[0].offsetHeight
    
            console.log(this.$projectsPage)
            this.$canvas.style.position = 'absolute'
    
            this.$projectsPage[0].insertBefore(this.$canvas, this.$projectsPage[0].firstChild)
        }, 300)
        
 
    

        this.animate()

        window.addEventListener('resize', () => {
            this.$canvas.width = this.$projectsPage[0].offsetWidth
            this.$canvas.height = this.$projectsPage[0].offsetHeight
        })
    }
    draw() {
        this.context.beginPath()

        this.gradient = this.context.createLinearGradient(0, 0, this.$canvas.width, 0)
        this.gradient.addColorStop(0.2, '#FA709A')
        this.gradient.addColorStop(1, '#FDBC5D')
        this.context.fillStyle = this.gradient

        this.context.moveTo(this.$canvas.width / 5 * 2, 0)
        this.context.bezierCurveTo(
        this.$canvas.width / 3 * 2 + Math.sin(new Date() / this.speed) * this.amplitude.x, this.$canvas.height / 10 + Math.sin(new Date() / this.speed) * this.amplitude.y - this.amplitude.y,
        this.$canvas.width / 3 * 2 + Math.sin(new Date() / this.speed) * this.amplitude.x, this.$canvas.height / 2 + Math.cos(new Date() / this.speed) * this.amplitude.y - this.amplitude.y,
    
        this.$canvas.width / 3 * 2 + Math.sin(new Date() / this.speed) * this.amplitude.x, this.$canvas.height / 2)
        this.context.bezierCurveTo(
        this.$canvas.width / 3 * 2 + Math.sin(new Date() / this.speed) * this.amplitude.x, this.$canvas.height / 6 * 5 + Math.sin(new Date() / this.speed) * this.amplitude.y + this.amplitude.y,
        this.$canvas.width / 3 * 1 + Math.sin(new Date() / this.speed) * this.amplitude.x, this.$canvas.height / 2 + Math.cos(new Date() / this.speed) * this.amplitude.y + this.amplitude.y,

        this.$canvas.width / 4 * 1, this.$canvas.height)
        this.context.bezierCurveTo(this.$canvas.width, this.$canvas.height, this.$canvas.width, this.$canvas.height, this.$canvas.width, this.$canvas.height)
        this.context.bezierCurveTo(this.$canvas.width, 0, this.$canvas.width, 0, this.$canvas.width, 0)

        this.context.fill()
        this.context.closePath()
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this))

        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height)
        this.draw()
    }
}