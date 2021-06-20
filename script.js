function onSearchSubmit() {
    var name = document.getElementById("movieName").value;
    var modifiedName = name.split(' ').join('_');
}

async function makeAPICall(movieName) {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieName}`);
    const data = await response.json();
    return data;
}