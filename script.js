// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// 649087

const count = 10;
const apiKey = "_PiVIODJVm-MuDmtDPXCEqI8BkFr0HyDq4Zv1kCvhwQ";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// create elements for Links & Photos, Add to DOM
function displayPhotos(){
      // Run function for each object in array 
      photosArray.forEach((photos) => {
            // Create <a> to link to unsplash
            const item = document.createElement('a');
            item.setAttribute('href',photos.links.html);
            item.setAttribute('target', '_blank');

            //create img element
            const img = document.createElement('img');
            img.setAttribute('src', photos.urls.regular)
            img.setAttribute('alt', photos.alt_description);
            img.setAttribute('title', photos.alt_description);

            // Put <a> inside <img> then put both inside image container
            item.appendChild(img);
            imageContainer.appendChild(item);
            
      });
      
      
}


// getting photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray[0]);
    
    // disply photos function
    displayPhotos();
  } catch (error) {
    // error
    console.log(error);
  }
}

// on Load
getPhotos();
