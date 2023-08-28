const inputItem = document.querySelector(".item")
const qtd = document.querySelector(".qtd")
const selectUnity = document.querySelector(".unity")
const itemCategory = document.querySelector(".category")
const addItem = document.querySelector(".addItem")
const form = document.querySelector("form")
const main = document.querySelector("main")
let listItems = []

const colors = [
  {
    pink: "#DB5BBF",
    pink_dark: "#251622",
    orange: "#E07B67",
    orange_dark: "#261A17",
    yellow: "#BB9F3A",
    yellow_dark: "#211E12",
    green: "#8CAD51",
    green_dark: "#1C2015",
    blue: "#7B94CB",
    blue_dark: "#1A1D23",
  },
]

form.addEventListener("submit", createObject)

function createObject(target) {
  target.preventDefault()
  /* console.log(item.value, qtd.value, selectUnity.value, itemCategory.value) */
  let item = {
    itemName: inputItem.value,
    itemQtd: qtd.value,
    itemUnity: checkUnity(),
    itemCategory: itemCategory.value,
    /*     itemCategoryColor: checkCategoryColor(),
itemCategoryTextColor: checkCategoryTextColor(), */
  }
  /* 
  listItems.push(item)

  for (i of listItems) {
  } */
  main.innerHTML += createListItem(item)
  form.reset()
}

function checkUnity() {
  if (qtd.value > 1) return selectUnity.value + "s"
  else return selectUnity.value
}

function checkCategoryColor() {
  /*   switch (itemCategory.value) {
  
case"padaria":
return colors.
} */
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
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sandwich"
            >
              <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
              <path
                d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
              />
              <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
              <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
            </svg>
            
            <span>${i.itemCategory}</span>
          </div>
          <button class="options">
          <svg
            class="more"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-more-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
        </div>
      </div>`
}

function disableItem(event) {
  const card = event.currentTarget.parentElement.parentElement
  console.log(card)
  const checked = card.querySelector(".checkbox-wrap svg")
  console.log(checked)
  const h3 = card.querySelector("h3")
  if (event.currentTarget.checked == true) {
    checked.style.display = "block"
    card.classList.add("active")
    h3.classList.add("active")
  } else {
    checked.style.display = "none"
    card.classList.remove("active")
    h3.classList.remove("active")
  }
}
