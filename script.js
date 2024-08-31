// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// 649087

const count = 10;
const apiKey = '_PiVIODJVm-MuDmtDPXCEqI8BkFr0HyDq4Zv1kCvhwQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// getting photos from Unsplash API
async function getPhotos() {
     try{
      const response = await fetch(apiUrl);
      const data = await response.json()
      console.log(data);
      

     }catch (error){
      // error
      console.log(error);
      

     }
      
      
}

getPhotos()