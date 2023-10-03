const btnRate = document.querySelector(".confirm")
const btnSend = document.querySelector(".send")
const evaluateDiv = document.querySelector(".evaluate")
const step1Div = document.querySelector(".step1")
const step2Div = document.querySelector(".step2")
const feedbackDiv = document.querySelector(".feedback")
const txtFeedback = document.querySelector(".textarea")

btnRate.addEventListener("click", () => {
  evaluateDiv.classList.add("hide")
  step1Div.classList.add("hide")
  feedbackDiv.classList.remove("hide")
  step2Div.classList.remove("hide")

  btnSend.disabled = true
})

txtFeedback.addEventListener("input", () => {
  if (txtFeedback.value != "") {
    txtFeedback.style.outline = "1px solid #685ed9"
    btnSend.disabled = false
  } else {
    txtFeedback.style.outline = "none"
    btnSend.disabled = true
  }
})

btnSend.addEventListener("click", () => {
  alert("Obrigado pelo seu feedback!")
  window.location.reload()
})

function check(event) {
  let stars = document.querySelectorAll("ph-star")
  for (star of stars) {
    star.color = "#E3E1E4"
  }

  for (let i = 1; i <= event.currentTarget.dataset.id; i++) {
    document.querySelector(`[data-id="${i}"]`).color = "#D4983E"
  }
}
