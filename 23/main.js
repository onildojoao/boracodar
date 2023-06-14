let currentStep = 0
const formSteps = document.querySelectorAll(".form-step")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const data = new FormData(form)
  alert(`Obrigado ${data.get("p-name")}!`)
})

form.addEventListener("click", (e) => {
  if (!e.target.matches("[data-action]")) {
    return
  }
  const actions = {
    next() {
      if (!isValidInputs()) {
        return
      }
      currentStep++
    },
    prev() {
      currentStep--
    },
  }

  const handle = e.target.dataset.action
  actions[handle]()

  console.log(currentStep)
  updateActiveStep()
  updateProgressStep()
})

function updateActiveStep() {
  formSteps.forEach((step) => {
    step.classList.remove("active")
  })
  formSteps[currentStep].classList.add("active")
}
const progressSteps = document.querySelectorAll("header [data-step]")
function updateProgressStep() {
  progressSteps.forEach((step, idx) => {
    step.classList.remove("active")
    step.classList.remove("done")

    if (idx < currentStep + 1) {
      step.classList.add("active")
    }

    if (idx < currentStep) {
      step.classList.add("done")
    }
  })
}

function isValidInputs() {
  const currentFormStep = formSteps[currentStep]
  const formFields = [
    ...currentFormStep.querySelectorAll("input"),
    ...currentFormStep.querySelectorAll("textarea"),
  ]
  return formFields.every((input) => input.reportValidity())
}

formSteps.forEach((formStep) => {
  function addHide() {
    formStep.classList.add("hidden")
  }

  formStep.addEventListener("animationend", () => {
    console.log("adicionou hide")
    addHide()
    console.log(formSteps[currentStep])
    formSteps[currentStep].classList.remove("hidden")
  })
})
