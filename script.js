function onSearchSubmit() {
    var name = document.getElementById("movieName").value;
    var modifiedName = name.split(' ').join('_');
    makeAPICall(modifiedName).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error.message);
    })
}

async function makeAPICall(movieName) {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6ea51b5&t=${movieName}`);
    const data = await response.json();
    return data;
}