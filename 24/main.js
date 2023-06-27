const colorPreview = document.querySelector(".preview")
const colorSlider = document.getElementById("hue-slider")
const brightnessSlider = document.getElementById("brightness-slider")
const contrastSlider = document.getElementById("contrast-slider")
const textHue = document.getElementById("text-hue")
const textBrightness = document.getElementById("text-brightness")
const textContrast = document.getElementById("text-contrast")
const textShadow = document.getElementById("text-shadow")

colorSlider.addEventListener("input", function () {
  const hue = this.value
  const color = `hsl(${hue}, 100%, 50%)`

  colorPreview.style.backgroundColor = color
  colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`
  updateCurrentScheme()
})

brightnessSlider.addEventListener("input", function () {
  const brightness = this.value

  colorPreview.style.filter = `brightness(${brightness}%)`
  updateCurrentScheme()
})

contrastSlider.addEventListener("input", function () {
  const contrast = this.value

  colorPreview.style.filter = `contrast(${contrast}%)`
  updateCurrentScheme()
})

function updateCurrentScheme() {
  const hue = colorSlider.value
  const hsl = `hsl(${hue}, 100%, 50%)`
  textHue.innerText = `HSL: ${hsl}`
  textBrightness.innerText = `Brilho: ${brightnessSlider.value}`
  textContrast.innerText = `Contraste: ${contrastSlider.value}`
  textShadow.innerText = `Sombra: 0px 0px 53px 13px ${hsl}`

  console.log(colorSlider)
}

updateCurrentScheme()
