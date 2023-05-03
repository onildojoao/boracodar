const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
]
const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
const days = [
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
]
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const yearModal = document.querySelector(".modal-year")
const filterButton = document.querySelector(".filter")
const monthsElement = document.querySelector(".modal-year main")
const daysElement = document.querySelector(".modal-month main")
const weekDaysElement = document.querySelector(".modal-month header")
const currentYearElement = document.querySelector(".modal-year span")
const currentMonthElement = document.querySelector(".modal-month span")

filterButton.addEventListener("click", showYearModal)
monthsElement.innerHTML = populateMonths()
daysElement.innerHTML = populateDays()
weekDaysElement.innerHTML = populateWeekDays()

currentYearElement.innerHTML = currentYear
currentMonthElement.innerHTML = `${months[currentMonth]} ${currentYear}`

function populateMonths() {
  let output = ""

  const currentMonth = months[new Date().getMonth()]
  for (let month of months) {
    const selected = currentMonth == month ? "selected relative" : ""
    output = output + ` <div class='${selected}'>${month}</div>`
  }
  return output
}

function populateDays() {
  let output = ""
  /* const currentDay = days[new Date().getDay()] */
for (let day of days){
    /* const selected = currentDay == days[i] ? "selected relative" : "" */
    output = output + `<div class="">${day}</div>`
}

  return output
}

function populateWeekDays() {
  let output = ""
  for (let wekD of weekDays) {
    console.log(weekDays)
    console.log(wekD)
    output = output + `<div>${wekD}</div>`
  }
  return output
}

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
