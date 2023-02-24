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
        newDiv.innerHTML = `
    <h4>Country: ${country.name.common}</h4>
    <p>Capital: ${country.capital ? country.capital : 'No capital'}</p>
    <p>Population: ${country.population}</p>
    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    `;
        countryContainer.appendChild(newDiv);
    });
}
const loadCountryDetail = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = data => {
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
        <h3>Name: ${data.name.common} </h3>
        <img src="${data.flags.png}">
    `
}
countryLoader();