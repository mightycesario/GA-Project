// Global Variables

// Select Elements (caching)
const globeEl = document.querySelector("#globe")
const captionEl = document.querySelector("#caption")
const thumbsEl = document.querySelector("#thumbs")
const quotesEl = document.querySelector("#quotes")
const planetsEl = document.querySelector("#planet-facts")
const filmDataEl = document.querySelector("#film-data")
const imgs = document.querySelectorAll(".pic")
const titleDataEl = document.querySelector("#image-caption")
const apiURL = "https://swapi.dev/api/"


// Event Listeners


fetch(apiURL + "planets")
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
          titleDataEl.textContent = `Welcome to Tatooine! Also known as the planet of the twin suns. This is the home planet of the Skywalker's!`
          planetsEl.textContent = `Here are some interesting facts about this planet: 
            Terrain: ${parsedData.results[i].terrain}
            Population: ${parsedData.results[i].population}
            Diameter: ${parsedData.results[i.diameter]}
            `
        } else if (imgs[i].getAttribute("planet") === "Hoth") {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Hoth! This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!"
        } else {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Endor! Home of tall trees, tree-house structures, and of course home of the furry Ewok's!"
          planetsEl.textContent = `Here are some interesting facts about this planet: 
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



// Functions


// Fetch API data on planet and display it via DOM 
const displayPlanetData = () => {
  let globeEl = document.querySelector("#globe")
  // let thumbs = document.querySelectorAhttps://swapi.dev/api/ll("img")
  for(let tempVar in thumbs) {
    if(thumbs[tempVar].getAttribute("planet") === "Tatooine") {
      globeEl.innerHTML += "testing"
    }
  }
} 

document.querySelector("#thumbs").addEventListener("click", () => {

  let timer = null
  let index = 0

  function displayQuote() {
    const newHopequotes = ["That’s no moon. It’s a space station. — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper? — Leia Organa", "I find your lack of faith disturbing. — Darth Vader"]

    const empireQuotes = ["Yes, Your Highnessness? – Han Solo", "He’s no good to me dead. – Boba Fett", "The son of Skywalker must not become a Jedi. – Emperor Palpatine",
      "Why, you stuck up, half-witted, scruffy-looking…nerf-herder! – Leia Organa", "Do. Or do not. There is no try. – Yoda", "I am your father. – Darth Vader"]

    const returnQuotes = ["Bring me Solo and the Wookiee. They will all suffer for this outrage.", "Obi-Wan has taught you well.", "And now, young Skywalker...you will die.", "IT'S A TRAP!!", "You cannot hide forever, Luke.", "I am a Jedi, like my father before me", "What is thy bidding, my master?"]



    // for(let idx in newHopequotes) {
    //   quotesEl.innerHTML = newHopequotes[idx]
    //   console.log(index)
    //   // console.log(index)
    // }
    quotesEl.innerHTML = newHopequotes[index]

    if (index === newHopequotes.length - 1) {
      clearInterval(timer)
      console.log("now clearinterval")
      // setTimeout(timer)
    } else {
      index++
    }

    if(index > 3) {
      index = 0
    }

  }

  timer = setInterval(displayQuote, 2000)

})


const filmDataFunction = () => {
  
  fetch(apiURL + "people")
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

// populate planet-api-data with API data

function planetWeather() {

  fetch(apiURL + "planets")
    .then((responseData) => {
      return responseData.json()
    })
    .then((parsedData) => {
      let spanEl = globeEl.querySelector("#planet-api-data")
      console.log(imgs[0].getAttribute("planet"))

      if(imgs[0].getAttribute("planet") === "Tatooine") {
        console.log(spanEl)
        spanEl.innerHTML = `Current weather on ${parsedData.results[0].name}<br>`
        spanEl.innerHTML += `Current climate: ${parsedData.results[0].climate}<br>`
        spanEl.innerHTML += `Current population: ${parsedData.results[0].population}<br>`
      }

      if(imgs[1].getAttribute("planet") === "Hoth") {
        console.log(parsedData.results[3].name)
        console.log(`Current climate: ${parsedData.results[0].climate} \n`)
        console.log(`Current population: ${parsedData.results[0].population}`)
        console.log(spanEl.textContent)
      }
      
      if(imgs[2].getAttribute("planet") === "Endor") {
        console.log(parsedData.results[6].name)
        console.log(`Current climate: ${parsedData.results[0].climate} \n`)
        console.log(`Current population: ${parsedData.results[0].population}`)
        console.log(spanEl.textContent)
      }
    })
    
}

planetWeather()
