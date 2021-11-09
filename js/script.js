const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// Grab data from API & convert to JS Obj

const getImage = async function(){
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  // console.log(images);
  selectRandomImage(images);

};

// Manipulate API data obtained, & already converted to JS Obj

const selectRandomImage = function(images){
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  // console.log(randomIndex)
  // console.log(randomImage)
  displayImage(randomImage);

};

const displayImage = function(randomImage){
  const author = randomImage["author"];
  const imageAddress = randomImage["download_url"]
  // console.log(author)
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");

};


button.addEventListener("click", function(){
  getImage();

});
