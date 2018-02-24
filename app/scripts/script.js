// const scene = new SceneWebGl()
// const cube = new Cubes(0, 200, scene)
// const cursorParallax = new CursorParallaxWebGl(cube)
// cube.animate()
const cursorParallax = new CursorParallax()

const wavesCanvas = new WavesCanvas()

const slider = new SliderCube('.cubeSlider_1__item', 520, 520, 90, 0)
const slider_2 = new SliderCube('.cubeSlider_2__item', 350, 350, 0, -90)
const slider_3 = new SliderCube('.cubeSlider_3__item', 150, 150, -90, 0)
