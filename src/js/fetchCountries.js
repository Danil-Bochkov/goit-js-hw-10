const BASE_URL = 'https://restcountries.com/v3.1';

async function fetchCountries(name) {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

export default { fetchCountries };