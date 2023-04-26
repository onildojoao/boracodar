const yearModal = document.querySelector(".modal-year")
const filterButton = document.querySelector(".filter")
const closeModalButton = document.querySelector(".modal-year .close")

filterButton.addEventListener("click", toggleYearModal)
closeModalButton.addEventListener("click", toggleYearModal)

function toggleYearModal() {
  yearModal.classList.toggle("hidden")
}
