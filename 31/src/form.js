import { startLoading, stopLoading, loadingMessage } from "./loader"
import { transcribeAudio } from "./transcribe"
import { loadVideo, getVideoId } from "./youtube-api"
import { renderText } from "./render"
import axios from "axios"

const form = document.querySelector("#form")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  try {
    //Iniciando
    loadingMessage("Iniciando a aplicação...")
    startLoading()

    const formData = new FormData(form)
    const ytbURL = formData.get("url")
    await loadVideo(ytbURL)
    //Baixando e convertendo
    loadingMessage("Baixando e convertendo o vídeo...")
    await axios.get("http://localhost:5555/audio?v=" + getVideoId(ytbURL))

    //Transcrevendo
    const data = await transcribeAudio()
    renderText(data)
  } catch (error) {
    console.log("[SUBMIT ERROR]" + error)
  } finally {
    stopLoading()
  }
})
