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

        this.speed = {
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0,
            seven: 0,
            eight: 0,
            nine: 0,
            ten: 0
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

    animate() {
        // const randomInt = (min, max) => {
        //     return Math.random() * (max - (min)) + (min)
        // }

        // const randomSpeed = Math.random() * (1 - (-1)) + (-1)
        
        this.speed.one += this.randomInt(-3, 3)
        this.speed.two += this.randomInt(-3, 3)
        this.speed.three += this.randomInt(-3, 3)
        this.speed.four += this.randomInt(-3, 3)
        this.speed.five += this.randomInt(-3, 3)
        this.speed.six += this.randomInt(-3, 3)
        this.speed.seven += this.randomInt(-3, 3)
        this.speed.eight += this.randomInt(-3, 3)
        this.speed.nine += this.randomInt(-3, 3)
        this.speed.ten += this.randomInt(-3, 3)

        // console.log(randomSpeed)
        this.clear()

        this.context.beginPath()

        this.gradient = this.context.createLinearGradient(0, 0, this.$canvas.width, 0)
        this.gradient.addColorStop(0.4, '#FA709A')
        this.gradient.addColorStop(1, '#FEE140')
        this.context.fillStyle = this.gradient

        this.context.moveTo(this.$canvas.width, this.canvasRatio.y * 4)
        this.context.bezierCurveTo(this.canvasRatio.x * 6, this.canvasRatio.y * 4, this.canvasRatio.x * 5, this.canvasRatio.y * 12, this.canvasRatio.x * 5 + this.speed.one, this.canvasRatio.y * 24 + this.speed.two)
        this.context.bezierCurveTo(this.canvasRatio.x * 5, this.canvasRatio.y * 36, this.canvasRatio.x * 5, this.canvasRatio.y * 47, this.canvasRatio.x * 3.5 + this.speed.three, this.canvasRatio.y * 47 + this.speed.four)
        this.context.bezierCurveTo(this.canvasRatio.x * 2, this.canvasRatio.y * 47, this.canvasRatio.x * 1.4, this.canvasRatio.y * 58, this.canvasRatio.x * 1.4 + this.speed.five, this.canvasRatio.y * 64 + this.speed.six)
        this.context.bezierCurveTo(this.canvasRatio.x * 1.4, this.canvasRatio.y * 70, this.canvasRatio.x * 1.6, this.canvasRatio.y * 74, this.canvasRatio.x * 1.8 + this.speed.seven, this.canvasRatio.y * 76 + this.speed.eight)
        this.context.bezierCurveTo(this.canvasRatio.x * 2, this.canvasRatio.y * 78, this.canvasRatio.x * 2.6, this.canvasRatio.y * 83, this.$canvas.width + this.speed.nine, this.canvasRatio.y * 83 + this.speed.ten)
        this.context.bezierCurveTo(this.$canvas.width, this.$canvas.height, this.$canvas.width, this.canvasRatio.y * 10, this.$canvas.width, this.canvasRatio.y * 4)

        this.context.fill()

        this.context.closePath()


        window.requestAnimationFrame(this.animate.bind(this))
    }

    clear() {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height)
    }

    randomInt(min, max) {
        return Math.random() * (max - (min)) + (min)
    }
}