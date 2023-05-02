const yearModal = document.querySelector(".modal-year")
const filterButton = document.querySelector(".filter")
const closeModalButton = document.querySelector(".modal-year .close")

filterButton.addEventListener("click", showYearModal)

yearModal.addEventListener("click", (e) => {
  const dialogDimensions = yearModal.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    yearModal.close()
  }
})

function showYearModal() {
  yearModal.showModal()
}

function closeYearModal() {
  yearModal.close()
}
