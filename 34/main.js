const inputItem = document.querySelector(".item")
const qtd = document.querySelector(".qtd")
const selectUnity = document.querySelector(".unity")
const itemCategory = document.querySelector(".category")
const addItem = document.querySelector(".addItem")
const form = document.querySelector("form")
const main = document.querySelector("main")

form.addEventListener("submit", createObject)

function createObject(target) {
  target.preventDefault()

  let item = {
    itemName: inputItem.value,
    itemQtd: qtd.value,
    itemUnity: checkUnity(),
    itemCategory: itemCategory.value,
    itemSVG: checkSVG(),
  }

  main.innerHTML += createListItem(item)
  updateTagColors()
  form.reset()
}

function checkUnity() {
  if (qtd.value > 1) return selectUnity.value + "s"
  else return selectUnity.value
}

function checkSVG() {
  switch (itemCategory.value) {
    case "fruta":
      return "./assets/apple.svg"
    case "padaria":
      return "./assets/sandwich.svg"
    case "legume":
      return "./assets/carrot.svg"
    case "bebida":
      return "./assets/milk.svg"
    case "carne":
      return "./assets/beef.svg"
  }
}

function checkCategoryTagColor(span) {
  switch (span) {
    case "fruta":
      return "#261A17"
    case "padaria":
      return "#211E12"
    case "legume":
      return "#1C2015"
    case "bebida":
      return "#1A1D23"
    case "carne":
      return "#251622"
  }
}

function checkCategoryTextColor(span) {
  switch (span) {
    case "fruta":
      return "#E07B67"
    case "padaria":
      return "#BB9F3A"
    case "legume":
      return "#8CAD51"
    case "bebida":
      return "#7B94CB"
    case "carne":
      return "#DB5BBF"
  }
}

function updateTagColors() {
  const cards = main.querySelectorAll(".cards")

  for (card of cards) {
    let span = card.querySelector(".right-wrap span")
    let tag = card.querySelector(".tag")

    let tagColor = checkCategoryTagColor(span.textContent)
    let textColor = checkCategoryTextColor(span.textContent)

    tag.style.backgroundColor = tagColor
    span.style.color = textColor
  }
}

function createListItem(i) {
  return `<div class="cards">
        <div class="left-wrap">
        <div class="checkbox-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FBF9FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          <input type="checkbox" class="checkbox" onclick="disableItem(event)"/>
          </div>
          <div class="details">
            <h3>${i.itemName}</h3>
            <span>${i.itemQtd} ${i.itemUnity}</span>
          </div>
        </div>

        <div class="right-wrap">
          <div class="tag">
          
            <img src='${i.itemSVG}'>
            <span>${i.itemCategory}</span>

          </div>
          <button class="options">
          <img src='./assets/more.svg'>
          
        </button>
        </div>
      </div>`
}

function disableItem(event) {
  const card = event.currentTarget.parentElement.parentElement.parentElement

  const checked = card.querySelector(".checkbox-wrap svg")

  const h3 = card.querySelector("h3")
  if (event.currentTarget.checked == true) {
    checked.style.display = "block"
    card.classList.add("removed")
    h3.classList.add("removed")
  } else {
    checked.style.display = "none"
    card.classList.remove("removed")
    h3.classList.remove("removed")
  }
}
