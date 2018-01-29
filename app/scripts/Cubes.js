class Cubes {
    constructor(x, y, SceneWebGl) {
        // CUBE
        this.cubes = []
        this.scene = SceneWebGl.scene
        this.camera = SceneWebGl.camera
        this.renderer = SceneWebGl.renderer
        this.geometry = new THREE.CubeGeometry(50, 50, 50)

        this.material = new THREE.MeshLambertMaterial({ color: 0x706fd3, transparent: true })
        
        for(let i = 0; i < 2000; i++){
            this.mesh = new THREE.Mesh(this.geometry, this.material)

            this.mesh.position.z = Math.floor(Math.random() * -3000)
            this.mesh.position.x = Math.floor(Math.random() * (800 - (-800)) + (-800))
            this.mesh.position.y = Math.floor(Math.random() * (800 - (-800)) + (-800))

            this.mesh.rotationIncrement = 
            {
                x: Math.random() * (0.01 - 0.001) + 0.001,
                y: Math.random() * (0.01 - 0.001) + 0.001,
                z: Math.random() * (0.01 - 0.001) + 0.001,
            }

            this.cubes.push(this.mesh)
            this.scene.add(this.mesh)
        }
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        
        for(const cube of this.cubes){
            const randomAccess = Math.floor(Math.random() * 2) + 1
            let boolean
    
            randomAccess == 1 ? boolean = true : boolean = false

            boolean ? cube.rotation.x += cube.rotationIncrement.x : cube.rotation.x -= cube.rotationIncrement.x
            boolean ? cube.rotation.y += cube.rotationIncrement.y : cube.rotation.y -= cube.rotationIncrement.y
            boolean ? cube.rotation.z += cube.rotationIncrement.z : cube.rotation.z -= cube.rotationIncrement.z
        }
        this.renderer.render(this.scene, this.camera) 
        requestAnimationFrame(this.animate.bind(this))
    }
}