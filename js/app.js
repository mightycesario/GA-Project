console.log("SWAPI test")


fetch("https://swapi.dev/api/planets/")
  .then((responseData) => {
    return responseData.json()
  })
  .then((parsedData) => {
    let firstP = document.querySelector("p")
    let childP = document.createElement("p")
    console.log(parsedData)
    
  })

  