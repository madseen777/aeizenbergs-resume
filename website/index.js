const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://tchupd6oa6brrjgeqgjw2i2nau0uoxag.lambda-url.eu-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();