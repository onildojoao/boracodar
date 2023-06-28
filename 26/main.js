let qtdPamonhasText = document.querySelector("#value")
let qtdPamonhasNumber = qtdPamonhasText.innerText
const addPamonhas = document.querySelector("#add")
const subPamonhas = document.querySelector("#sub")
let resources = document.querySelector("ul")

addPamonhas.addEventListener("click", function () {
  qtdPamonhasNumber = Number(qtdPamonhasNumber) + 1
  qtdPamonhasNumber <= 9
    ? (qtdPamonhasText.innerText = "0" + String(qtdPamonhasNumber))
    : (qtdPamonhasText.innerText = +String(qtdPamonhasNumber))
  updateResources()
})

subPamonhas.addEventListener("click", function () {
  if (Number(qtdPamonhasNumber) <= 1) return
  qtdPamonhasNumber = Number(qtdPamonhasNumber) - 1
  qtdPamonhasNumber <= 9
    ? (qtdPamonhasText.innerText = "0" + String(qtdPamonhasNumber))
    : (qtdPamonhasText.innerText = +String(qtdPamonhasNumber))
  updateResources()
})

function updateResources() {
  resources.innerHTML = `<li>• ${qtdPamonhasNumber} espiga de milho verde</li>
            <li>• ${qtdPamonhasNumber} colher de sopa de açúcar</li>
            <li>• ${qtdPamonhasNumber} colher de sopa de manteiga</li>
            <li>• Sal a gosto</li>
            <li>• Palha de milho (para embrulhar)</li>`
}
