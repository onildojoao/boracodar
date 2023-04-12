const elements = document.querySelectorAll(".text-hidden p")
const TEXTLIMIT = 45

for (let p of elements) {
  const aboveLimit = p.innerText.length > TEXTLIMIT
  const dotsOrEmpty = aboveLimit ? "..." : ""
  p.innerText = p.innerText.substring(0, TEXTLIMIT) + dotsOrEmpty
}
