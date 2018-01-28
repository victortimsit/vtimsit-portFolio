class Cubes {
    constructor(x, y, SceneWebGl) {
        // CUBE
        this.cubes = []
        this.scene = SceneWebGl.scene
        this.camera = SceneWebGl.camera
        this.renderer = SceneWebGl.renderer
        this.geometry = new THREE.CubeGeometry(50, 50, 50)

        this.material = new THREE.MeshLambertMaterial({ color: 0x706fd3, transparent: true })
        
        for(let i = 0; i < 50; i++){
            this.mesh = new THREE.Mesh(this.geometry, this.material)

            this.mesh.position.z = Math.floor(Math.random() * -3000)
            this.mesh.position.x = Math.floor(Math.random() * (800 - (-800)) + (-800))
            this.mesh.position.y = Math.floor(Math.random() * (800 - (-800)) + (-800))
    
            this.cubes.push(this.mesh)
            this.scene.add(this.mesh)
        }
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        for(const cube of this.cubes){

            cube.rotation.x += Math.random() * (0.01 - 0.001) + 0.001
            cube.rotation.y += Math.random() * (0.01 - 0.001) + 0.001
        }
        this.renderer.render(this.scene, this.camera) 
        requestAnimationFrame(this.animate.bind(this))
    }
}