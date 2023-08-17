const form = document.querySelector("form")
const error = document.querySelector(".error")
let httpStatusCode

form.addEventListener("submit", async () => {
  event.preventDefault()
  start()
})

async function start() {
  const formData = new FormData(form)
  const inputValue = formData.get("search")
  const data = await getGithubData(inputValue)
  if (httpStatusCode !== 200) {
    showError()
    return
  }
  hideError()
  const node = createTicket(data)
  document.querySelector(".ticket").innerHTML = node
}

async function getGithubData(inputValue) {
  try {
    const githubData = await fetch(`https://api.github.com/users/${inputValue}`)
    httpStatusCode = githubData.status
    return githubData.json()
  } catch (error) {
    console.log(error)
  }
}

function showError() {
  error.style.display = "block"
}

function hideError() {
  error.style.display = "none"
}

function createTicket({ name, avatar_url }) {
  return `
              <div class="avatar-div">
                <img src="${avatar_url}" alt="" class="avatar" />
                <h3>Tripulante</h3>
                <span>${name}</span>
              </div>
              <div class="details">
                <div class="dl">
                  <strong>Evento</strong>
                  <strong>Data</strong>
                  <strong>Hora</strong>
                </div>
                <div class="dr">
                  <strong>IA para devs</strong>
                  <strong>16 - 19 AGO. 2023</strong>
                  <strong>Ao Vivo - 19H</strong>
                </div>
              </div>
              <img src="./assets/barcode.svg" alt="" class="barcode" />
            </div>
          `
}
