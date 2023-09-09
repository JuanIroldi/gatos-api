function getRandomCat() {
    // Reemplaza 'YOUR_API_KEY' con tu clave de API
    const apiKey = 'live_J0iUYTPdbfi5kHGPzIUGZ1P1an8Nw4uFyAIXWXrWz35PhX5Mgiyk53qeTsrdkp49';
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const catImage = document.getElementById('catImage');
        catImage.src = data[0].url;
    })
    .catch(error => console.error('Error:', error));
}