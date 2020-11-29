const imagesContainer = document.getElementById("images");
const loader = document.getElementById("loader");

let photosArray = {};

// Unsplash API
const count = 10;
const apiKey = "44KVvNmzksxA9DQVu4jcH24kotaoMt6Pm8_Fdrrt8KU";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to set attributes on DOM elements

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for photos

function displayphotos() {
  photosArray.forEach((photo) => {
    //Create <a> to the photo
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Creat <img> for phot
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Add photo to images container
    item.appendChild(img);
    imagesContainer.appendChild(item);
  });
}
// Get Photos from unsplash api

async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayphotos();
  } catch (error) {}
}

// On load

getPhotos();
