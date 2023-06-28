var tag = document.createElement("script")

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player
let ambientLight
let animationEnd = false
const videoId = "qC0vDKVPCrw"

function createAmbientLight() {
  if (!animationEnd) return
  ambientLight = new YT.Player("ambient-light", {
    videoId,

    events: {
      onReady: ambientLightReady,
      onStateChange: ambientStateChange,
    },
  })
}

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("video", {
    videoId,

    events: {
      onStateChange: videoStateChange,
    },
  })
}

function videoStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.PLAYING:
      ambientLight.seekTo(event.target.getCurrentTime())
      ambientLight.playVideo()
      break
    case YT.PlayerState.PAUSED:
      ambientLight.seekTo(event.target.getCurrentTime())
      ambientLight.pauseVideo()
      break
  }
}

function lowerAmbientLightQuality(event) {
  event.target.mute()

  const qualityLevels = event.target.getAvailableQualityLevels()
  if (qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
    qualityLevels.reverse()
    const lowestLevel =
      qualityLevels[qualityLevels.findIndex((q) => q !== "auto")]

    event.target.setPlaybackQuality(lowestLevel)
  }
}

function ambientLightReady(event) {
  betterAmbientLight(event)
}

function ambientStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.BUFFERING:
    case YT.PlayerState.PLAYING:
      lowerAmbientLightQuality(event)
      break
  }
}

const app = document.querySelector("#app")

app.addEventListener("animationend", (e) => {
  if (e.animationName !== "appear") return

  animationEnd = true
  createAmbientLight()
})
