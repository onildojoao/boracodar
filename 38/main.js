/* import "./style.css" */

const cardsContainer = document.querySelector(".cards")

start()
function start() {
  const cards = renderCards()
  cardsContainer.innerHTML = cards
}

function check(event) {
  const cards = document.querySelectorAll(".card")

  for (card of cards) {
    card.classList.remove("correct")
    card.classList.remove("incorrect")
    card.querySelector(".correct").classList.add("hidden")
    card.querySelector(".incorrect").classList.add("hidden")
  }
  //saber qual cartão foi clicado
  let cardNode = event.currentTarget.parentNode

  //verificar se o cartão clicado é o correto
  let chosenCardId = event.currentTarget.dataset.id
  if (chosenCardId == 3) {
    cardNode.classList.add("correct")
    cardNode.querySelector(".correct").classList.remove("hidden")
  } else {
    cardNode.classList.add("incorrect")
    cardNode.querySelector(".incorrect").classList.remove("hidden")
    let correctCard = document.querySelector('[data-id="3"]').parentNode
    correctCard.classList.add("correct")
    correctCard.querySelector(".correct").classList.remove("hidden")
    //Mostrar o cartão correto
  }
}

function renderCards() {
  return `<div class="card">
          <button class="feedback" onclick="check(event)" data-id="1">
<svg class="correct hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7" stroke="#5cad1d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg class="incorrect hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75824 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.75824 6.75732M12.0009 12L17.2435 17.2426" stroke="#f77070" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
          <img src="./assets/IMG1.png" alt="" />
          <p>Caçar tesouros</p>
        </div>

        <div class="card">
          <button class="feedback" onclick="check(event)" data-id="2">
<svg class="correct hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7" stroke="#5cad1d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg class="incorrect hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75824 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.75824 6.75732M12.0009 12L17.2435 17.2426" stroke="#f77070" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
          <img src="./assets/IMG2.png" alt="" />
          <p>Ter mais tempo para ler livros</p>
        </div>

        <div class="card">
          <button class="feedback" onclick="check(event)" data-id="3">
<svg class="correct hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7" stroke="#5cad1d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg class="incorrect hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75824 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.75824 6.75732M12.0009 12L17.2435 17.2426" stroke="#f77070" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
          <img src="./assets/IMG3.png" alt="" />
          <p>Navegar pelos 7 mares</p>
        </div>`
}
