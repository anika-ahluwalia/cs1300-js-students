
var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=vmof68CW1BfTws_qrtHxqnW_UvLrgxr7wk9VFoFJ5gM";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });


// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
const getRequest= () => {
  corsPromise().then(request => request.onload = request.onerror = function () {
    const data = JSON.parse(request.response).data;
    handleResponse(data);
  }
  );
}

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
const handleResponse = (data) => {

  const plants1753 = data.filter((plant) => {
    return plant.year == 1753;
  })

  plants1753.map(displayDiv);
}

const displayDiv = (content) => {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "wrapper");
  const image = document.createElement("img");
  image.src = content.image_url;
  image.alt = "plant picture";
  wrapperDiv.appendChild(image);
  document.getElementById("plant pics").appendChild(wrapperDiv);
}