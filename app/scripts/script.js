const scene = new SceneWebGl()
const cube = new Cubes(0, 200, scene)
const cursorParallax = new CursorParallax(cube)
cube.animate()

const slider = new SliderCube('.cubeSlider_1__item', 300, 300, 90, 0)
const slider_2 = new SliderCube('.cubeSlider_2__item', 220, 220, 0, -90)
const slider_3 = new SliderCube('.cubeSlider_3__item', 98, 98, -90, 0)
const slider_4 = new SliderCube('.cubeSlider_4__item', 220, 220, 0, 90)