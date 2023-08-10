const deleteButton = document.querySelector(".input-wrapper .ph")
deleteButton.addEventListener("click", () => {
  let input = document.getElementById("url")
  input.value = ""
})
