class WavesCanvas {
    constructor(width, height) {
        this.$body = document.querySelector('body')
        this.$canvas = document.createElement('canvas')
        this.context = this.$canvas.getContext('2d')

        this.$canvas.width = width
		this.$canvas.height = height

        this.$body.appendChild(this.$canvas)

    }
}