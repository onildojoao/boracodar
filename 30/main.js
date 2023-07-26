const recommended = document.querySelector(".recommend")
const movieTitles = document.querySelectorAll(".title-wrap h3")
let recommendedClicked = false
let limit = 26
for (let title of movieTitles) {
  const aboveLimit = title.innerHTML.length > limit
  const dotsOrEmpty = aboveLimit ? "..." : ""
  title.innerText = title.innerText.substring(0, limit) + dotsOrEmpty
}

recommended.addEventListener("click", (e) => {
  if (recommendedClicked) {
    recommended.innerHTML = `Nova recomendação <i class="ph ph-lightning"></i>`
    recommendedClicked = false
  } else {
    recommended.innerHTML = `Gerando... <i class="ph ph-spinner-gap"></i>`
    recommendedClicked = true
  }
})

console.log(movieTitles)
