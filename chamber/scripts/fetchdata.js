const file = 'jason/data.json';

// const url = 'https://github.com/KOFIWILLIAMS/wdd230/blob/master/chamber/jason/data.json';

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
//   }

//   getProphetData();

async function getBusinessDetails() {
  const response = await fetch(file);
  const data = await response.json();
  //console.table(data.prophets);
  displayBusinessDetails(data.businessDetails)
  
}

getBusinessDetails();


const displayBusinessDetails = (businessDetails) => {
  const myGrid = document.querySelector('div.grid'); // select the output container element

  businessDetails.forEach((businessData) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let vision = document.createElement('p')
      let pic = document.createElement('img');
      let address = document.createElement('p')
      let website = document.createElement('a')
      let membership = document.createElement('p')
      
      

    // Build the h2 content out to show the prophet's full name - finish the template string
    h3.textContent = `${businessData.name}`;
      address.textContent = `${businessData.address}`
      vision.textContent = `${businessData.vision}` 
      website.textContent = `${businessData.website}`
      membership.textContent = `Membership: ${businessData.membership}` 

    // Build the image portrait by setting all the relevant attribute
    pic.setAttribute('src', businessData.image);
    pic.setAttribute('alt', `Portait of ${businessData.name}`);
    pic.setAttribute('loading', 'lazy');
    pic.setAttribute('width', '300');
    pic.setAttribute('height', '300');
    website.setAttribute('href', businessData.website)

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(pic);
    card.appendChild(vision) ;
    card.appendChild(address) ;
    card.appendChild(website)  ;
    card.appendChild(membership);  
      myGrid.appendChild(card);
  } // end of forEach loop
  )
} // end of function expression
