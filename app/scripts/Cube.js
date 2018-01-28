// console.log('hello world !')

// let renderer, scene, camera, mesh

// const init = () => {

//     renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas'), antialias: false })

//     renderer.setSize(window.innerWidth, window.innerHeight)
//     // document.querySelector('.container').appendChild(renderer.domElement)
//     renderer.setClearColor(0xfefefe)
//     renderer.setPixelRatio(window.devicePixelRatio)

//     camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 4000)
//     scene = new THREE.Scene()

//     const light = new THREE.AmbientLight(0xffffff, 0.5)
//     scene.add(light)

//     const pointLight = new THREE.PointLight(0xffffff, 0.5)
//     scene.add(pointLight)

//     // CUBE
//     const geometry = new THREE.CubeGeometry(100, 100, 100)

//     // TRIANGLE
//     // const geometry = new THREE.BufferGeometry()
//     // const vertices = new Float32Array([
//     // 	-10.0, -10.0, 0.0,
//     // 	10.0, -10.0, 0.0,
//     // 	10.0, 10.0, 0.0
//     // ])

//     // geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3))

//     // PLAN
//     // const geometry = new THREE.PlaneGeometry(100, 100)

//     // const geometry = new THREE.TorusKnotGeometry(100, 30, 100, 100)


//     const material = new THREE.MeshLambertMaterial({ color: 0x706fd3, transparent: true })
//     mesh = new THREE.Mesh(geometry, material)
//     mesh.position.z = -1000
//     mesh.position.x = 200


//     meshTwo = new THREE.Mesh(geometry, material)
//     meshTwo.position.z = -3000
//     meshTwo.position.x = -400

//     scene.add(mesh, meshTwo)

//     // renderer.render(scene, camera)
// }

// const animate = () => {
//     mesh.rotation.x += 0.01
//     mesh.rotation.y += 0.02
//     meshTwo.rotation.x += -0.01
//     meshTwo.rotation.y += 0.02
//     renderer.render(scene, camera)
//     requestAnimationFrame(animate)
// }

// init()
// animate()

class Cube {
    constructor(x, y, SceneWebGl) {
        // CUBE
        this.scene = SceneWebGl.scene
        this.camera = SceneWebGl.camera
        this.renderer = SceneWebGl.renderer
        this.geometry = new THREE.CubeGeometry(100, 100, 100)

        this.material = new THREE.MeshLambertMaterial({ color: 0x706fd3, transparent: true })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.z = -1000
        this.mesh.position.x = x
        this.mesh.position.y = y

        this.scene.add(this.mesh)
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.y += 0.02
        this.renderer.render(this.scene, this.camera) 
        requestAnimationFrame(this.animate.bind(this))
    }
}