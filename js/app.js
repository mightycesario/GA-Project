console.log("SWAPI test")


fetch()
  .then((respeonseData) => {
    return respeonseData.json()
  })
  .then((parsedData) => {
    let firstP = document.querySelector("p")
    let childP = document.createElement("p")
    childP.textContent = `SWAPI data: ${parsedData}`
    firstP.appendChild(childP)
  })

  