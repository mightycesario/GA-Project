console.log("SWAPI test")


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

    // setup event handler and loop through images using HTML 'planet' attribute
    let imgs = document.querySelectorAll(".pic")
    let dataEl = document.querySelector("#planet-data")

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function () {
        if (imgs[i].getAttribute("planet") === "Tatooine" && parsedData.results[i].name === "Tatooine") {
          console.log("inside: ", this.getAttribute("planet"))
          quotesEl.innerHTML = `Welcome to Tatooine! Alson known as the planet of the twin suns. This is the home planet of the Skywalker's!`
          dataEl.textContent = `Here are some interesting facts about this planet: 
            Terrain: ${parsedData.results[i].terrain}
            Population: ${parsedData.results[i].population}
            Diameter: ${parsedData.results[i.diameter]}
            `
        } else if (imgs[i].getAttribute("planet") === "Naboo" && parsedData.results[i].name === "Naboo") {
          console.log("inside: ", this.getAttribute("planet"))
          quotesEl.textContent = "Welcome to Naboo! This is where Luke and Leia's Mother descends from. If you look close or watch from a different timeline you just might spot the beautiful Princess Amadala!"
          return
        } else {
          console.log("inside: ", this.getAttribute("planet"))
          quotesEl.textContent = "Welcome to Hoth! This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!"
          dataEl.textContent = `Here are some interesting facts about this planet: 
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

function displayQuote() {
  const quotes = ["Nice shot kid! One in a million", "Luke, I am your father", "Laugh it up fuzzball", "Unlimited Powwwaaah"]
  console.log(quotes[index])
  if (index === quotes.length - 1) {
    clearInterval(timer)
  } else {
    index++
  }
}
timer = setInterval(displayQuote, 3000)

const displayPlanetData = () => {
  let globeEl = document.querySelector("#globe")
  let thumbs = document.querySelectorAll("#thumbs")  
  for(let i = 0; i < thumbs.length; i++) {
    // if(thumbs[i].getAttribute("planet") === "Tatooine") {
      console.log(thumbs[i].getAttribute("planet"))
      globeEl.innerHTML += "some"
    // }
  }
} 

document.querySelector("#thumbs").addEventListener("click", displayPlanetData)


