const { cornsilk } = require("color-name");

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
require = (option) => {

}

const promiseObj = corsPromise();

corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      handleResponse(request.reponse);
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
const handleResponse = (requestResponse) => {
  const jsonified = JSON.parse(requestResponse);
  const plantsArray = jsonified.data;

  const plantsAfter1753 = plantsArray.filter((arrayItem) => {
    return arrayItem.year > 1753;
  })

  plantsAfter1753.map(console.log)
}

const displayDiv = (content) => {
  const wrapperDiv = document.createElement("div");

}