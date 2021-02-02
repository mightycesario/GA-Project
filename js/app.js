console.log("SWAPI test")

// Global Variables

// Select Elements (caching)
const globlEl = document.querySelector("#globe")
const captionEl = document.querySelector("#caption")
const thumbsEl = document.querySelector("#thumbs")
const quotesEl = document.querySelector("#quotes")
const planetsEl = document.querySelector("#planet-data")
const filmDataEl = document.querySelector("#film-data")
const imgs = document.querySelectorAll(".pic")
const titleDataEl = document.querySelector("#title-data")


// Event Listeners


fetch("https://swapi.dev/api/planets/")
  .then((responseData) => {
    return responseData.json()
  })
  .then((parsedData) => {

    let quotesEl = document.getElementById("quotes")


    // now can use API to  display / manipulate object data on webpage 
    for (let i = 0; i < parsedData.results.length; i++) {
      let pEl = document.createElement("p")
      //pEl.textContent = `The current weather on ${parsedData.results[i].name} is ${parsedData.results[i].climate}`
      quotesEl.appendChild(pEl)
    }


    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function () {
        if (imgs[i].getAttribute("planet") === "Tatooine") {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = `Welcome to Tatooine! Alson known as the planet of the twin suns. This is the home planet of the Skywalker's!`
          titleDataEl.textContent = `Here are some interesting facts about this planet: 
            Terrain: ${parsedData.results[i].terrain}
            Population: ${parsedData.results[i].population}
            Diameter: ${parsedData.results[i.diameter]}
            `
        } else if (imgs[i].getAttribute("planet") === "Naboo") {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Naboo! This is where Luke and Leia's Mother descends from. If you look close or watch from a different timeline you just might spot the beautiful Princess Amadala!"
          return
        } else {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Hoth! This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!"
          titleDataEl.textContent = `Here are some interesting facts about this planet: 
            Terrain: ${parsedData.results[i].terrain}
            Population: ${parsedData.results[i].population}
            Diameter: ${parsedData.results[i.diameter]}
            `
        }
      })
    }

    for (let i = 0; i < parsedData.results.length; i++) {
      // dataEl.textContent = parsedData.results[i].name
      // ul.appendChild(liEl)
    }

  })


let timer = null
let index = 0


// Functions


// Fetch API data on planet and display it via DOM 
const displayPlanetData = () => {
  let globeEl = document.querySelector("#globe")
  let thumbs = document.querySelectorAll("img")
  for(let tempVar in thumbs) {
    if(thumbs[tempVar].getAttribute("planet") === "Tatooine") {
      globeEl.innerHTML += "testing"
    }
  }
} 

document.querySelector("#thumbs").addEventListener("click", () => {
  function displayQuote() {
    const quotes = ["That’s no moon. It’s a space station.\” — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper?\” — Leia Organa", "I find your lack of faith disturbing.\” — Darth Vader"]
    let quotesEl = document.querySelector("#quotes")
    quotesEl.innerHTML = `"${quotes[index]}"`
    if (index === quotes.length - 1) {
      clearInterval(timer)
      setTimeout(timer)
    } else {
      index++
    }
  }
  timer = setInterval(displayQuote, 3000)
})


const filmDataFunction = () => {
  
  fetch("https://swapi.dev/api/people")
    .then((responseData) => {
      return responseData.json()
    })
    .then((parsedData) => {
      if(filmDataEl) {
        filmDataEl.textContent = `
        Title: ${parsedData.results[0].title}        
        Director: ${parsedData.results[0].director}
        Release Date: ${parsedData.results[0].release_date}
        Producer: ${parsedData.results[0].producer}`
        let names = ""        
        for(let i = 0; i < parsedData.results.length; i++) {
          names += `${parsedData.results[i].name}`
          filmDataEl.textContent += `Characters in film:  ${names}`
        }
      }
    })
}


// console.log(filmDataFunction())

