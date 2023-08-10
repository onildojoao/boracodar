import express from "express"
import cors from "cors"
import { downloader } from "./download-video.js"
import { createMP3 } from "./converter.js"

const app = express()
app.use(cors())

app.get("/audio", async (req, res) => {
  const videoId = req.query.v
  try {
    await downloader(videoId)

    await createMP3()
    return res.send("Processos de Backend finalizados!")
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.listen(5555, () => console.log("Server online"))
