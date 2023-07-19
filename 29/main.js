const slider = document.querySelector("input")
const container = document.getElementById("container")


slider.addEventListener("input", (event) => {
  container.style.setProperty("--position", `${event.target.value}%`)
})
