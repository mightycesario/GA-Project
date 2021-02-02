console.log("SWAPI test")

// Global Variables
///////////////////

// Select Elements (caching)
////////////////////////////
const globlEl = document.querySelector("#globe")
const captionEl = document.querySelector("#caption")
const thumbsEl = document.querySelector("#thumbs")
const quotesEl = document.querySelector("#quotes")
const planetsEl = document.querySelector("#planet-facts")
const filmDataEl = document.querySelector("#film-data")
const imgs = document.querySelectorAll(".pic")
const titleDataEl = document.querySelector("#image-caption")

// Event Listeners
// - anonymous inline function
//////////////////////////////
document.querySelector("#thumbs").addEventListener("click", (e) => {

  let timer = null
  let index = 0
  
  const displayQuote = () => {
    const newHopequotes = ["That’s no moon. It’s a space station. — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper? — Leia Organa", "I find your lack of faith disturbing. — Darth Vader"]

    const empireQuotes = ["Yes, Your Highnessness? – Han Solo", "He’s no good to me dead. – Boba Fett", "The son of Skywalker must not become a Jedi. – Emperor Palpatine",
      "Why, you stuck up, half-witted, scruffy-looking…nerf-herder! – Leia Organa", "Do. Or do not. There is no try. – Yoda", "I am your father. – Darth Vader"]

    const returnQuotes = ["Bring me Solo and the Wookiee. They will all suffer for this outrage.", "Obi-Wan has taught you well.", "And now, young Skywalker...you will die.", "IT'S A TRAP!!", "You cannot hide forever, Luke.", "I am a Jedi, like my father before me", "What is thy bidding, my master?"]


    
    // console.log("imgs", imgs)
    
    for(let i = 0; i < imgs.length; i++) {
        // console.log(imgs[idx].getAttribute("planet"))

        if(imgs[i].getAttribute("planet") === "Tatooine") {
          if (index === newHopequotes.length - 1) {
            console.log("tat")
            quotesEl.innerHTML = newHopequotes[i]
            // index = 0
            clearInterval(timer)
          }
        } else if(imgs[i].getAttribute("planet") === "Hoth") {
            if (index === newHopequotes.length - 1) {
              console.log("hoth")
              quotesEl.innerHTML = empireQuotes[index]
              // index = 0
              clearInterval(timer)
            }
      } else if(imgs[i].getAttribute("planet") === "Naboo") {
            if (index === newHopequotes.length - 1) {
              console.log("nab")
              quotesEl.innerHTML = empireQuotes[index]
              // index = 0
              clearInterval(timer)
              // index = 0
              clearInterval(timer)
            }
      } else {
          index++
      }
    }


  }

  timer = setInterval(displayQuote, 2000)

})

// Event listeners (with named function callbacks)



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
          titleDataEl.textContent = `Welcome to Tatooine! Also known as the planet of the twin suns. This is the home planet of the Skywalker's!`
          planetsEl.textContent = `Here are some interesting facts about this planet: 
            Terrain: ${parsedData.results[i].terrain}
            Population: ${parsedData.results[i].population}
            Diameter: ${parsedData.results[i.diameter]}
            `
        } else if (imgs[i].getAttribute("planet") === "Naboo") {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Naboo! This is where Luke and Leia's Mother descends from. If you look close or watch from a different timeline you just might spot the beautiful Princess Amadala!"
        } else {
          console.log("inside: ", this.getAttribute("planet"))
          titleDataEl.textContent = "Welcome to Hothasdfasdf! This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!"
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



// Functions (try to use function syntax for hoisting OR pay attention to order of functions)
//////////////////////////////////////////////////////////////////////////////////


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


console.log(filmDataFunction())