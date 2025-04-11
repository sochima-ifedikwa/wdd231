// discover.js

// Get the reference to the division where we display the items
const showHere = document.querySelector("#allplaces");
const places = './data/places.json';

// Fetch the JSON data from the file
fetch(places)
  .then(response => response.json())
  .then(data => {
    // Loop through the array of JSON items
    function displayItems(places) {
      places.forEach(x => {
        // Build the card element
        const thecard = document.createElement('div');
        // Build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_link}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);
        // Build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);
        // Build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
        // Build the description element
        const thedesc = document.createElement('p');
        thedesc.innerHTML = `${x.description} <br><br>COST:  ${x.cost}`;
        thecard.appendChild(thedesc);
        // Build the button
        const thelearn = document.createElement('button');
        thelearn.innerText = "Learn More";
        thecard.appendChild(thelearn);

        // Add an event listener to the button to show more information
        thelearn.addEventListener('click', () => {
          showStuff(x);
        });

        showHere.appendChild(thecard);
      }); // end loop
    } // end function

    // Call the displayItems function with the fetched data
    displayItems(data);
  })
  .catch(error => console.error('Error fetching data:', error));

// Populate the dialog with information when the button is clicked
function showStuff(x) {
  // Assuming mytitle, myinfo, and mydialog are defined elsewhere in the code
  mytitle.innerHTML = x.name;
  myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
  mydialog.showModal();
} // end of function