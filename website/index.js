const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://jnfrl373qruq2u6voj2qjdwvpm0ohzvz.lambda-url.eu-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();