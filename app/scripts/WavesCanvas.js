class WavesCanvas {
    constructor(width, height) {
        this.$body = document.querySelector('body')
        this.$canvas = document.createElement('canvas')
        this.context = this.$canvas.getContext('2d')

        this.$canvas.width = width
        this.$canvas.height = height
        
        this.canvasRatio = {
            x: window.innerWidth / 8,
            y: window.innerHeight / 60
        }

        this.$body.appendChild(this.$canvas)

        this.context.beginPath()

        this.gradient = this.context.createLinearGradient(0, 0, this.$canvas.width, 0)
        this.gradient.addColorStop(0.4, '#FA709A')
        this.gradient.addColorStop(1, '#FEE140')
        this.context.fillStyle = this.gradient

        this.context.moveTo(this.$canvas.width, this.canvasRatio.y * 4)
        this.context.bezierCurveTo(this.canvasRatio.x * 6, this.canvasRatio.y * 4, this.canvasRatio.x * 5, this.canvasRatio.y * 12, this.canvasRatio.x * 5, this.canvasRatio.y * 24)
        this.context.bezierCurveTo(this.canvasRatio.x * 5, this.canvasRatio.y * 36, this.canvasRatio.x * 5, this.canvasRatio.y * 47, this.canvasRatio.x * 3.5, this.canvasRatio.y * 47)
        this.context.bezierCurveTo(this.canvasRatio.x * 2, this.canvasRatio.y * 47, this.canvasRatio.x * 1.4, this.canvasRatio.y * 58, this.canvasRatio.x * 1.4, this.canvasRatio.y * 64)
        this.context.bezierCurveTo(this.canvasRatio.x * 1.4, this.canvasRatio.y * 70, this.canvasRatio.x * 1.6, this.canvasRatio.y * 74, this.canvasRatio.x * 1.8, this.canvasRatio.y * 76)
        this.context.bezierCurveTo(this.canvasRatio.x * 2, this.canvasRatio.y * 78, this.canvasRatio.x * 2.6, this.canvasRatio.y * 83, this.$canvas.width, this.canvasRatio.y * 83)
        this.context.bezierCurveTo(this.$canvas.width, this.$canvas.height, this.$canvas.width, this.canvasRatio.y * 10, this.$canvas.width, this.canvasRatio.y * 4)

        this.context.fill()

        this.context.closePath()
    }
}