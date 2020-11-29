// Unsplash API
const count = 10;
const apiKey = "44KVvNmzksxA9DQVu4jcH24kotaoMt6Pm8_Fdrrt8KU";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from unsplash api

async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const data = res.json();
    console.log(data);
  } catch (error) {}
}

// On load

getPhotos();
