function onSearchSubmit() {
    var name = document.getElementById("movieName").value;
    var modifiedName = name.split(' ').join('_');
    makeAPICall(modifiedName).then(data => {
        console.log(data);
        const {Title, Year, Rated, Released, Plot, Poster, Type, Actors, Language} = data;
        renderData(Title, Year, Rated, Released, Plot, Poster, Type, Actors, Language);
    }).catch(error => {
        console.log(error.message);
    })

     
}

async function makeAPICall(movieName) {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6ea51b5&t=${movieName}`);
    const data = await response.json();
    return data;
}


function renderData(movieTitle, movieYear, movieRated, movieReleased, moviePlot, moviePoster, movieType, movieActors, movieLanguage) {
    document.getElementById("moviePoster").src = moviePoster;
    document.getElementById("movieTitle").innerHTML = movieTitle;
    document.getElementById("movieRating").innerHTML = movieRated;
    document.getElementById("type").innerHTML = movieType;
    document.getElementById("language").innerHTML = movieLanguage;
    document.getElementById("releaseDate").innerHTML = movieReleased;
    document.getElementById("Actors").innerHTML = movieActors;
    document.getElementById("plot").innerHTML = moviePlot;
}