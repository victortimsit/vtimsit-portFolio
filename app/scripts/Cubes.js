class Cubes {
    constructor(x, y, SceneWebGl) {
        // CUBE
        this.cubes = []
        this.scene = SceneWebGl.scene
        this.camera = SceneWebGl.camera
        this.renderer = SceneWebGl.renderer
        this.geometry = new THREE.CubeGeometry(50, 50, 50)

        this.material = new THREE.MeshLambertMaterial({ color: 0x706fd3, transparent: true })
        
        for(let i = 0; i < 200; i++){
            this.mesh = new THREE.Mesh(this.geometry, this.material)

            this.mesh.position.z = Math.floor(Math.random() * -3000)
            this.mesh.position.x = Math.floor(Math.random() * (800 - (-800)) + (-800))
            this.mesh.position.y = Math.floor(Math.random() * (800 - (-800)) + (-800))

            this.mesh.rotation.x = Math.floor(Math.random() * (360 - 0) + 360)
            this.mesh.rotation.y = Math.floor(Math.random() * (360 - 0) + 360)
            this.mesh.rotation.y = Math.floor(Math.random() * (360 - 0) + 360)
            

            this.mesh.rotationIncrement = 
            {
                // Math.random() * (max - min) + min
                x: Math.random() * (0.001 - 0.0001) + 0.0001,
                y: Math.random() * (0.001 - 0.0001) + 0.0001,
                z: Math.random() * (0.001 - 0.0001) + 0.0001,
            }

            this.cubes.push(this.mesh)
            this.scene.add(this.mesh)
        }
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        for(const cube of this.cubes){

            cube.rotation.x += cube.rotationIncrement.x
            cube.rotation.y += cube.rotationIncrement.y
            cube.rotation.z += cube.rotationIncrement.z
        }
        this.renderer.render(this.scene, this.camera) 
        requestAnimationFrame(this.animate.bind(this))
    }
}