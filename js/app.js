// Global Variables
const apiURL = "https://swapi.dev/api/"

// Select Elements (caching)
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




// Event Listeners

fetch(apiURL + "planets")
  .then((responseData) => {
    return responseData.json()
  })
  .then((parsedData) => {



    // now can use API to  display / manipulate object data on webpage 
    for (let i = 0; i < parsedData.results.length; i++) {
      let pEl = document.createElement("p")
      //pEl.textContent = `The current weather on ${parsedData.results[i].name} is ${parsedData.results[i].climate}`
      // quotesEl.appendChild(pEl)
    }

      
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function (e) {
        let planet = e.target.getAttribute("planet")
        if (planet === "Tatooine") {
          titleDataEl.innerHTML = ` Also known as the planet of the twin suns. This is the home planet of the Skywalker bloodline`          
        } else if (planet === "Hoth") {
          titleDataEl.innerHTML = `<strong>Hoth:</strong> This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!`
        } else {
          titleDataEl.innerHTML = `<strong>Endor:</strong> Home of tall trees, tree-house structures, and of course home of the furry Ewok's!`
          
        }
      })
    }

    for (let i = 0; i < parsedData.results.length; i++) {
      // dataEl.textContent = parsedData.results[i].name
      // ul.appendChild(liEl)
    }

  })

  for(let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", planetWeather)
  }
  


// Functions
// thumbsEl.addEventListener("click", (e) => {

//   displayQuotes()

//   function displayQuotes() {

//     console.log("here 2")
//     let timer = null
//     let index = 0
//     const planet = e.target.getAttribute("planet")

//     const newHopequotes = ["That’s no moon. It’s a space station. — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper? — Leia Organa", "I find your lack of faith disturbing. — Darth Vader"]

//     const empireQuotes = ["Yes, Your Highnessness? – Han Solo", "He’s no good to me dead. – Boba Fett", "The son of Skywalker must not become a Jedi. – Emperor Palpatine",
//       "Why, you stuck up, half-witted, scruffy-looking…nerf-herder! – Leia Organa", "Do. Or do not. There is no try. – Yoda", "I am your father. – Darth Vader"]

//     const returnQuotes = ["Bring me Solo and the Wookiee. They will all suffer for this outrage.", "Obi-Wan has taught you well.", "And now, young Skywalker...you will die.", "IT'S A TRAP!!", "You cannot hide forever, Luke.", "I am a Jedi, like my father before me", "What is thy bidding, my master?"]

//     quotesEl.innerHTML = newHopequotes[index]

//     // for(let i = 0; i < newHopequotes.length; i++) {
//     //   console.log(i)
//     //   setInterval(function() {
//     //     console.log(newHopequotes[i])
//     //      // quotesEl.innerHTML = newHopequotes[i]
//     //   }, 3000)
//     // }
    
//     // if(index === newHopequotes.length-1) {
//     //   clearInterval()
//     // } else {
//     //   console.log("index", index)
//     //   index++
//     // }
    

//     // return index

//     if (index === newHopequotes.length - 1) {
//       // console.log("first", index, planet)
//       index++
//       clearInterval(timer)
//       console.log("now clearinterval")
//       // setTimeout(timer)

//     } else {
//       // console.log("third", index, planet)
//       index++
//     }

//     if (index > 3) {
//       index = 0
//       // clearInterval(timer)
//     }

//     timer = setInterval(displayQuotes, 2000)


//   }
  




   

// })


document.querySelector("#thumbs").addEventListener("click", (e) => {

  let timer = null
  let index = 0

  function displayQuote() {

    
    const newHopequotes = ["That’s no moon. It’s a space station. — Obi-Wan Kenobi", "Aren’t you a little short for a stormtrooper? — Leia Organa", "I find your lack of faith disturbing. — Darth Vader"]

    const empireQuotes = ["Yes, Your Highnessness? – Han Solo", "He’s no good to me dead. – Boba Fett", "The son of Skywalker must not become a Jedi. – Emperor Palpatine",
      "Why, you stuck up, half-witted, scruffy-looking…nerf-herder! – Leia Organa", "Do. Or do not. There is no try. – Yoda", "I am your father. – Darth Vader"]

    const returnQuotes = ["Bring me Solo and the Wookiee. They will all suffer for this outrage.", "Obi-Wan has taught you well.", "And now, young Skywalker...you will die.", "IT'S A TRAP!!", "You cannot hide forever, Luke.", "I am a Jedi, like my father before me", "What is thy bidding, my master?"]

    
    let planet = e.target.getAttribute("planet")

    // console.log(planet)
    

    // if(0 === 2) {
    //   console.log()
    //   console.log("if", 0)
    //   <div id="quotes">I find your lack of faith disturbing. — Darth Vader</div>
    //   clearInterval()
    // }

    
    if (planet === "Tatooine") {

      if(index === newHopequotes.length - 1) {
        console.log("if", "index", index)
        quotesEl.innerHTML = newHopequotes[index]
        clearInterval(timer)
      } else {
        quotesEl.innerHTML = newHopequotes[index]
        console.log("inside tat else", "index", index)
        index++
      }

      if(index > newHopequotes.length-1) {
        index = 0
      }

    } else if(planet === "Hoth") {

      if(index === empireQuotes.length - 1) {        
        clearInterval(timer)
      } else {
        quotesEl.innerHTML = empireQuotes[index]
        console.log("inside empire else", index)
        index++
      } 

      if(index > empireQuotes.length-1) {
        index = 0
      }

    } else if(planet === "Endor") {
      
      quotesEl.innerHTML = returnQuotes[index]
      console.log("inside return else", index)
      console.log(index, returnQuotes[index])
      index++
      clearInterval(timer)

      // if (index > returnQuotes.length-1) {
      //   index = 0
      // }
    }


  }

  timer = setInterval(displayQuote, 2000)
})


// function filmDataFunction() {
  
//   fetch(apiURL + "people")
//     .then((responseData) => {
//       return responseData.json()
//     })
//     .then((parsedData) => {
//       if(filmDataEl) {
//         filmDataEl.textContent = `
//         Title: ${parsedData.results[0].title}        
//         Director: ${parsedData.results[0].director}
//         Release Date: ${parsedData.results[0].release_date}
//         Producer: ${parsedData.results[0].producer}`
//         let names = ""        
//         for(let i = 0; i < parsedData.results.length; i++) {
//           names += `${parsedData.results[i].name}`
//           filmDataEl.textContent += `Characters in film:  ${names}`
//         }
//       }
//     })
// }


// console.log(filmDataFunction())

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
          
          <li class="climate-population">Climate: ${parsedData.results[0].climate}</li>
          <li class="climate-population">Population: ${parsedData.results[0].population}</li>
          </ul>`
      } else if (planet === "Hoth") {
        globeDiv.innerHTML = `
          <ul>
          <li class="climate-population">Climate: ${parsedData.results[3].climate}</li>
          <li class="climate-population">Population: ${parsedData.results[3].population}</li>
          </ul>`
      } else {
        globeDiv.innerHTML = `
          <ul>
          <li class="climate-population">Climate: ${parsedData.results[6].climate}</li>
          <li class="climate-population">Population: ${parsedData.results[6].population}</li>
          </ul>`
      }

    })
}


// function changeBackground() {
//   let body = document.body
//   body.style.background = "transparent url(\"../images/article-desert-l.png\") cover right top"
// }

let temp = "Hello"

// changeBackground()

function incrementParent() {

  let index = 0

  function incrementThrough() {

    if (index < 3) {
      index++
      console.log("index", index)
      // timer++
    }
    console.log("inside function", temp)

  }

  console.log("outside function", temp)

  let timerId = setInterval(incrementThrough, 3000)
}



// function clearIt() {
//   console.log("before clear", timer)
//   clearInterval(timerId)
//   console.log("after clear", timer)
// }

// let timerId = setInterval(incrementThrough, 2000)


