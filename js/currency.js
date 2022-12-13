const url = 'https://api.exchangeratesapi.io/latest?base=USD';
document.addEventListener('DOMContentLoaded', function() {
    fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: {
            "X-Auth-Token": "p2Vz3UsVy8f8Gg5rYQnzlbGL0jEGXpK0"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});
