import faker from "faker";
let cartText = `<div> you have ${faker.random.number()} items`;

document.querySelector("#dev-cart").innerHTML = cartText;
