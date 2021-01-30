console.log("SWAPI test")


fetch("https://swapi.dev/api/planets/")
  .then((responseData) => {
    return responseData.json()
  })
  .then((parsedData) => {
    
    let temperatureEl = document.getElementById("temperature")
    let planets = ["Tatooine", "Alderaan", "Hoth", "Dagobah", "Endor", "Naboo"]
    

    // now can use API to  display / manipulate object data on webpage 
    for(let i = 0; i <  parsedData.results.length; i++) {
      let pEl = document.createElement("p")
      //pEl.textContent = `The current weather on ${parsedData.results[i].name} is ${parsedData.results[i].climate}`
      temperatureEl.appendChild(pEl)
      // console.log(imgDiv[i].getAttribute("planet"))
      
      // } else if (imgDiv.className === "Hoth") {
      //   temperatureEl.innerHTML = `"Welcome to Hoth! This planet made it's debut in the second installment of the original star wars trilogy, known for its freezing cold weather, beautiful views and Taun-Tauns!`
      // } else {
      //   temperatureEl.innerHTML = `"Welcome to Naboo! This is where Luke and Leia's Mother descends from. If you look close or watch from a different timeline you just might spot the beautiful Princess Amadala!`
      // }
    }

    // setup event handler and loop through images using HTML 'planet' attribute
    let imgs = document.querySelectorAll(".pic")

    for(let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function() { 
        if(imgs[i].getAttribute("planet") === "Tatooine") {
            temperatureEl.innerHTML = `"Welcome to Tatooine! This is the home planet of the Skywalker's!`
        } else if (imgs[i].getAttribute("planet") === "Naboo") {
            temperatureEl.innerHTML = "Welcome to Naboo! This is where Luke and Leia's Mother descends from. If you look close or watch from a different timeline you just might spot the beautiful Princess Amadala!"
        }
      })
    }

    for(let i = 0; i < parsedData.results.length; i++) {
      let ul = document.querySelector("#planets")
      let liEl = document.createElement("li")
      liEl.textContent = `${parsedData.results[i].name}`
      ul.appendChild(liEl)
    }    

  })

  

