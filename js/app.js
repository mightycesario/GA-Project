// Global Variables
const apiURL = "https://swapi.dev/api/"


// Global variables and Select Elements (caching) Thanks Brock!
const globeEl = document.querySelector("#globe")
const captionEl = document.querySelector("#caption")
const thumbsEl = document.querySelector("#thumbs")
const quotesEl = document.querySelector("#quotes")
const planetsEl = document.querySelector("#planet-facts")
const filmDataEl = document.querySelector("#film-data")
const imgs = document.querySelectorAll(".pic")
const titleDataEl = document.querySelector("#image-caption")
const globeDiv = globeEl.querySelector("#planet-api-data")
const planetName = document.querySelector("#planet-name")


// Event Listeners and API stuff

fetch(apiURL + "planets")
  .then((responseData) => {
    return responseData.json()
  })
  .then((parsedData) => {


    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function (e) {
        let planet = e.target.getAttribute("planet")
        if (planet === "Tatooine") {
          titleDataEl.innerHTML = ` Also known as the planet of the twin suns. This is the home planet of the Skywalker bloodline`
        } else if (planet === "Hoth") {
          titleDataEl.innerHTML = `This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!`
        } else {
          titleDataEl.innerHTML = `Home of tall trees, tree-house structures, and of course home of the furry Ewok's!`
        }
      })
    }
  })

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", planetWeather)
}



// Functions

// Create a loop like behavior to scroll through array of quotes in bottom region of webpage
document.querySelector("#thumbs").addEventListener("click", (e) => {

 
  let index = 0

  // clearing the most recent id assigned via setInterval at bottom of function
  console.log("clearing", localStorage.getItem("timer"))
  clearInterval(localStorage.getItem("timer"))
  function displayQuote() {


    const newHopequotes = ["That’s no moon. It’s a space station. — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper? — Leia Organa", "I find your lack of faith disturbing. — Darth Vader"]

    const empireQuotes = ["Yes, Your Highnessness? – Han Solo", "He’s no good to me dead. – Boba Fett", "The son of Skywalker must not become a Jedi. – Emperor Palpatine",
      "Why, you stuck up, half-witted, scruffy-looking…nerf-herder! – Leia Organa", "Do. Or do not. There is no try. – Yoda", "I am your father. – Darth Vader"]

    const returnQuotes = ["Bring me Solo and the Wookiee. They will all suffer for this outrage.", "Obi-Wan has taught you well.", "And now, young Skywalker...you will die.", "IT'S A TRAP!!", "You cannot hide forever, Luke.", "I am a Jedi, like my father before me", "What is thy bidding, my master?"]


    let planet = e.target.getAttribute("planet")

    

    if (planet === "Tatooine") {

      if (index === newHopequotes.length - 1) {
        quotesEl.innerHTML = newHopequotes[index]
        
        clearInterval(timer)
      } else {
        quotesEl.innerHTML = newHopequotes[index]
        console.log(timer)
        index++
      }

      if (index > newHopequotes.length - 1) {
        index = 0
      }

    } else if (planet === "Hoth") {
      if (index === empireQuotes.length - 1) {
        
        clearInterval(timer)
        
      } else {
        quotesEl.innerHTML = empireQuotes[index]
        console.log(timer)
        index++
      }

      if (index > empireQuotes.length - 1) {
        index = 0
      }

    } else if (planet === "Endor") {

      quotesEl.innerHTML = returnQuotes[index]
      console.log(timer)
      index++      
      
      console.log("index", index)
      if (index > returnQuotes.length - 1) {
        clearInterval(timer)  
        index = 0
      }
    }


  }

  let timer = setInterval(displayQuote, 2000)

  let thisvariable = displayQuote()



  localStorage.setItem("timer", timer)
})


// populate #planet-api-data with API data for spinning globe gif element

function planetWeather(e) {
  fetch(apiURL + "planets")
    .then((responseData) => {
      return responseData.json()
    })
    .then((parsedData) => {


      let planet = e.target.getAttribute("planet")

      if (planet === "Tatooine") {
        planetName.innerHTML = parsedData.results[0].name
        globeDiv.innerHTML = `
          <ul>          
          <li class="climate-population"><span class="type">Climate:</span> ${parsedData.results[0].climate}</li>
          <li class="climate-population"><span class="type">Population:</span> ${parsedData.results[0].population}</li>
          </ul>`
      } else if (planet === "Hoth") {
        planetName.innerHTML = parsedData.results[3].name
        globeDiv.innerHTML = `
          <ul>
          <li class="climate-population"><span class="type">Climate:</span> ${parsedData.results[3].climate}</li>
          <li class="climate-population"><span class="type">Population</span> ${parsedData.results[3].population}</li>
          </ul>`
      } else {
        planetName.innerHTML = parsedData.results[6].name
        globeDiv.innerHTML = `
          <ul>
          <li class="climate-population"><span class="type">Climate:</span> ${parsedData.results[6].climate}</li>
          <li class="climate-population"><span class="type">Population:</span> ${parsedData.results[6].population}</li>
          </ul>`
      }

    })
}

