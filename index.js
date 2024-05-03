let body = document.querySelector("body");
body.style.margin = "0";

let container = document.createElement("div");
container.style.width = "100%";
container.style.height = "100vh";
container.style.position = "relative";
body.appendChild(container);

let black = document.createElement("div");
black.style.position = "absolute";
black.style.top = "0";
black.style.width = "100%";
black.style.height = "33.33vh";
black.style.backgroundColor = "black";
container.appendChild(black);

let green = document.createElement("div");
green.style.position = "absolute";
green.style.bottom = "0";
green.style.width = "100%";
green.style.height = "33.33vh";
green.style.backgroundColor = "green";
container.appendChild(green);

let red = document.createElement("div");
red.style.position = "absolute";
red.style.borderStyle = "solid";
red.style.borderWidth = "50vh";
red.style.borderColor = "transparent transparent transparent red";
container.appendChild(red);
