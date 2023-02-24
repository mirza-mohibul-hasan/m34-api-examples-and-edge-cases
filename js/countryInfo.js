const countryLoader = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = countries => {
    const countryContainer = document.getElementById('country-container');
    // for (const country of countries) {
    //     const newDiv = document.createElement('div');
    //     newDiv.classList.add('country')
    //     console.log(country)
    //     newDiv.innerHTML = `
    // <h4>Country: ${country.name.common}</h4>
    // <p>Capital: ${country.capital ? country.capital : 'No capital'}</p>
    // <p>Population: ${country.population}</p>
    // `;
    //     countryContainer.appendChild(newDiv);
    // }
    // countries.forEach(country => {
    //     const newDiv = document.createElement('div');
    //     newDiv.classList.add('country')
    //     console.log(country)
    //     newDiv.innerHTML = `
    // <h4>Country: ${country.name.common}</h4>
    // <p>Capital: ${country.capital ? country.capital : 'No capital'}</p>
    // <p>Population: ${country.population}</p>
    // `;
    //     countryContainer.appendChild(newDiv);
    // });
    countries.map(country => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('country')
        console.log(country)
        newDiv.innerHTML = `
    <h4>Country: ${country.name.common}</h4>
    <p>Capital: ${country.capital ? country.capital : 'No capital'}</p>
    <p>Population: ${country.population}</p>
    `;
        countryContainer.appendChild(newDiv);
    });
}
countryLoader();