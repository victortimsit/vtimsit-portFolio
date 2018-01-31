const scene = new SceneWebGl()
const cube = new Cubes(0, 200, scene)
const cursorParallax = new CursorParallax(cube)
cube.animate()

