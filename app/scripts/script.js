const scene = new SceneWebGl()
const cube = new Cubes(0, 200, scene)
const cursorParallax = new CursorParallax(cube)
cube.animate()

const slider = new SliderCube('.cubeSlider_1__item', 300, 300, -90, 0)
const slider_2 = new SliderCube('.cubeSlider_2__item', 200, 200, 0, -90)
