import { pipeline } from "@xenova/transformers"
import { loadingMessage } from "./loader"
/* import data from "../data.json" */
let data = null

export async function transcribeAudio() {
  const option = {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: "portuguese",
    task: "transcribe",
    return_timestamps: true,
  }

  try {
    console.time()
    loadingMessage(
      "Iniciando a transcrição do áudio! Esta etapa pode demorar um pouco... aguarde!"
    )
    console.log("[START_TRANSCRIBE_AUDIO]")

    const transcribeAudio = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    data = await transcribeAudio("../audio.mp3", option)
  } catch (error) {
    console.log("[ERROR_TRANSCRIBE_AUDIO]:", error)
    throw new Error(error)
  } finally {
    console.timeEnd()
    loadingMessage("Transcrição finalizada!")
    console.log("[END_TRANSCRIBE]:")
    return data
  }
}
