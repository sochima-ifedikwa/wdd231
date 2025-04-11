const showHere = document.querySelector("#allplaces");

const path = './data/places.json';

async function getPlaces () {
  try { 
    const response = await fetch(path);
    const data = await response.json();
    // console.log(data.places);
    displayPlaces(data.places);
  } catch (error) {
    console.error('Error fetching places:', error);
  }
}

getPlaces();

const displayPlaces = (allPlaces) => {
  allPlaces.forEach((place) => {
    const thecard = document.createElement('div')
    //build the photo element
    const thephoto = document.createElement('img')
    thephoto.src = `images/${place.photo_link}`
    thephoto.alt = place.name
    thecard.appendChild(thephoto)
    //build the title element
    const thetitle = document.createElement('h2')
    thetitle.innerText = place.name
    thecard.appendChild(thetitle)
    //build the address element
    const theaddress = document.createElement('address')
    theaddress.innerText = place.address
    thecard.appendChild(theaddress)
    //build the description element
    const thedesc = document.createElement('p')
    thedesc.innerHTML = `${place.description} <br><br>COST:  ${place.cost}`
    thecard.appendChild(thedesc)
    //build the button
    const thelearn = document.createElement('button')
    thelearn.innerText = "Learn More"
    thecard.appendChild(thelearn)


    showHere.appendChild(thecard)
  })
}

function showStuff(place) {
  mytitle.innerHTML = x.name
  myinfo.innerHTML = `Dedicated ${place.dedicated} by ${place.person} as temple number ${place.number}`
  mydialog.showModal();
}