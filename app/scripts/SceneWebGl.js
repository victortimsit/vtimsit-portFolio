class SceneWebGl {
    constructor() {
        this.$body = document.querySelector('body')
        this.$canvas = document.createElement('canvas')

        this.$body.appendChild(this.$canvas)
        
        this.renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas'), antialias: false })

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setClearColor(0xfefefe)
        this.renderer.setPixelRatio(window.devicePixelRatio)

        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 4000)
        this.scene = new THREE.Scene()

        this.light = new THREE.AmbientLight(0xffffff, 0.5)
        this.scene.add(this.light)

        this.pointLight = new THREE.PointLight(0xffffff, 0.5)
        this.scene.add(this.pointLight)
    }
}