const counter = document.querySelector(".counter-number");
async function updateCounter() {
        let response = await fetch("https://bq6byn7t2igi3hmcjbv6cqcigm0wcibj.lambda-url.eu-west-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `${data}`;
}

updateCounter();

function calculateElapsedTime(startYear, startMonth) {
    const startDate = new Date(startYear, startMonth - 1); // Month is 0-indexed
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years, months };
  }
  // Function to display the elapsed time
  function displayElapsedTime() {
    const startYear = 2021; // Replace with your starting year
    const startMonth = 3;  // Replace with your starting month (1-12)
    const { years, months } = calculateElapsedTime(startYear, startMonth);
    const counterElement = document.getElementById("activeCounter");
    counterElement.textContent = `March 2021 - Present ( ${years} years and ${months} months )`;
  }
  function displayElapsedTimeTotal() {
    const startYear = 2015; // Replace with your starting year
    const startMonth = 11;  // Replace with your starting month (1-12)
    const { years, months } = calculateElapsedTime(startYear, startMonth);
    const counterElement = document.getElementById("activeCounterTotal");
    counterElement.textContent = `November 2015 - Present ( ${years} years and ${months} months )`;
  }
  // Call the function when the page loads
  displayElapsedTime();
  displayElapsedTimeTotal();