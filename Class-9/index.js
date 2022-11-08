fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
.then((data) =>  {


//Step 1 Access the img element
let imageelement=document.getElementById("random-image")

// Step 2 store the image from data to 
// The img element
console.log(data)
imageelement.src = data.message
});
console.log("test")