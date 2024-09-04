const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://tchupd6oa6brrjgeqgjw2i2nau0uoxag.lambda-url.eu-west-1.on.aws/");
        let data = await response.json();

        // Log the entire response to see its structure
        console.log(data);

        // Assuming the correct property is 'count', update the DOM
        if (data && data.count !== undefined) {
            counter.innerHTML = `${data.count}`;
        } else {
            // Handle the case where 'count' is not present in the response
            counter.innerHTML = "N/A";
        }
    } catch (error) {
        console.error("Error fetching the counter data:", error);
        counter.innerHTML = "Error loading counter";
    }
}

updateCounter();