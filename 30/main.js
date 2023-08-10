const recommended = document.querySelector(".recommend")
let limit = 22

recommended.addEventListener("click", async () => {
  recommended.innerHTML = `Gerando... <i class="ph ph-spinner-gap"></i>`
  console.log(recommended.innerHTML)
  await new Promise((r) => setTimeout(r, 500))
  start()
  recommended.innerHTML = `Nova recomendação <i class="ph ph-lightning"></i>`
  console.log(recommended.innerHTML)
})

start()

async function start() {
  const moviesArray = await getPopularMovies()
  const chosenVideos = select3Videos(moviesArray.results)
  const getVideoDetails = chosenVideos.map(async (movie) => {
    const info = await getMoreInfo(movie)
    const props = {
      id: info.id,
      title: info.title,
      rating: Number(info.vote_average.toFixed(1)),
      poster_path: info.poster_path,
      duration: minutesToHourMinutesAndSeconds(info.runtime),
      release_year: info.release_date.slice(0, 4),
      poster_path: info.poster_path,
    }

    return createMovieLayout(props)
  })
  const finalOutput = await Promise.all(getVideoDetails)

  document.querySelector(".suggestions").innerHTML = finalOutput.join("")
  shortenMovieTitle()
}

async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTRiYTE4NWI3ZTM1MGIyODc4YmIyMGFkOThiZTk0ZSIsInN1YiI6IjY0Y2E4NTlhZGNiNmEzMDBjODVlZGRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lI-6d6_nc8jcgiTX8moSGSrDgOgFNCTM2JmiVkmg6Do",
    },
  }

  try {
    const popularMovies = await fetch(apiSortedMovies, options).then(
      (response) => response.json()
    )
    /*   console.log(popularMovies) */
    return popularMovies
  } catch (error) {
    console.log(error)
  }
}

function select3Videos(movies) {
  const random = () => Math.floor(Math.random() * movies.length)
  let selectedVideos = new Set()

  while (selectedVideos.size < 3) {
    selectedVideos.add(movies[random()].id)
  }

  return [...selectedVideos]
}

async function getMoreInfo(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTRiYTE4NWI3ZTM1MGIyODc4YmIyMGFkOThiZTk0ZSIsInN1YiI6IjY0Y2E4NTlhZGNiNmEzMDBjODVlZGRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lI-6d6_nc8jcgiTX8moSGSrDgOgFNCTM2JmiVkmg6Do",
    },
  }

  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      options
    ).then((response) => response.json())
    return data
  } catch (error) {
    console.log(error)
  }
}

function minutesToHourMinutesAndSeconds(duration) {
  const date = new Date(null)
  date.setMinutes(duration)
  return date.toISOString().slice(11, 19)
}

function shortenMovieTitle() {
  let movieTitles = document.querySelectorAll(".title-wrap h3")
  for (let title of movieTitles) {
    const aboveLimit = title.innerHTML.length > limit
    const dotsOrEmpty = aboveLimit ? "..." : ""
    title.innerText = title.innerText.substring(0, limit) + dotsOrEmpty
  }
}
async function watch(event) {
  console.log(event.currentTarget.dataset.id)
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTRiYTE4NWI3ZTM1MGIyODc4YmIyMGFkOThiZTk0ZSIsInN1YiI6IjY0Y2E4NTlhZGNiNmEzMDBjODVlZGRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lI-6d6_nc8jcgiTX8moSGSrDgOgFNCTM2JmiVkmg6Do",
    },
  }
  try {
    const apiMoviesResult = await fetch(
      `https://api.themoviedb.org/3/movie/
        ${event.currentTarget.dataset.id}/videos`,
      options
    ).then((response) => response.json())
    const { results } = apiMoviesResult

    const youtubeMovieVideo = results.find((video) => video.type === "Trailer")

    window.open(
      `https://www.youtube.com/watch?v=${youtubeMovieVideo.key}`,
      "blank"
    )
  } catch (error) {
    console.log(error)
  }
}

function createMovieLayout({
  id,
  title,
  rating,
  duration,
  release_year,
  poster_path,
}) {
  return `  <div class="card">
      <div class="title-wrap">
        <h3>${title}</h3>
        <div class="rating">
          <img class="stars" src="./assets/Star.png" alt="" />
          <span>${rating}</span>
        </div>
      </div>
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Imagem do filme ${title}" />

      <div class="info-wrapper">
        <div class="left">
          <img class="icons" src="./assets/Clock.png" alt="" />
          <span>${duration}</span>
        </div>
        <div class="right">
          <img class="icons" src="./assets/CalendarBlank.png" alt="" />
          <span>${release_year}</span>
        </div>
      </div>
      <button class="watch-trailer" onclick="watch(event)" data-id="${id}">
        <img src="./assets/Play.png" alt="" />
        Assistir trailer
      </button>
    </div>
  `
}
