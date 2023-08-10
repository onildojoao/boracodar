const renderChunk = ({ timestamp, text }) => `<div class="chunk flex">
    <time class="flex">${getMinutes(timestamp)}</time>
    <p>
      ${groupedText(text, timestamp)}
    </p>
  </div>`

export function renderText({ chunks }) {
  const formattedTranscription = chunks.map(renderChunk).join("")
  document.querySelector(".transcription .content").innerHTML =
    formattedTranscription
}

function getMinutes(timestamp) {
  let date = new Date(null)
  date.setTime(timestamp[0] * 1000)
  return date.toISOString().slice(14, 19)
}

function groupedText(text, timestamp) {
  const words = text.split(" ")

  const group = []
  for (let idx = 0; idx < words.length; idx++) {
    if (idx % 3 === 0) {
      group.push(words.slice(idx, idx + 3).join(" "))
    }
  }
  return group
    .map((item, idx) => {
      const [initialTime, finalTime] = timestamp
      const seekTo =
        idx == 0
          ? initialTime
          : (finalTime - initialTime) / (group.length - idx) + initialTime
      return `<span onclick=seek(event) data-seek-to=${seekTo}>${item}</span>`
    })
    .join("")
}

window.seek = function (event) {
  const seekTo = event.target.dataset.seekTo
  window.YTPlayer.seekTo(seekTo)
  window.YTPlayer.playVideo()
}
