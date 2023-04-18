const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';

async function buildDetailsMovies(){
    const urlParams = new URLSearchParams(window.location.search)
    const idMovie = urlParams.get('id')
    console.log(idMovie);

    const containerDetails = document.querySelector('.containerDetails')
    

    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=pt-BR`)
    const moviesDetails = await data.json()
    console.log(moviesDetails);

    const titleMovie = document.querySelector('.titleDetails')
    titleMovie.textContent = moviesDetails.title

    const titleOrigi = document.querySelector('.titleOrigi')
    titleOrigi.textContent = `Titulo Original: ${moviesDetails.original_title}`

    const poster = document.querySelector('.imgMovie')
    poster.src = `https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`

    const date = document.querySelector('.data');
    const time = document.querySelector('.time')
    const gender = document.querySelector('.gender')

    date.textContent = moviesDetails.release_date
    time.textContent = `${moviesDetails.runtime} min`
    gender.textContent = ` - ${moviesDetails.genres[0].name}, ${moviesDetails.genres[1].name}, ${moviesDetails.genres[2].name} - `

    const sinopse = document.querySelector('.sinopseValue')
    sinopse.textContent = moviesDetails.overview

    const tagline = document.querySelector('.tagline')
    tagline.textContent = moviesDetails.tagline

    // const img2 = document.createElement('img')
    // img2.src = `https://image.tmdb.org/t/p/w500${moviesDetails.backdrop_path}`

    // containerDetails.append(img2)
    containerDetails.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${moviesDetails.backdrop_path})`
    containerDetails.style.backgroundRepeat = "no-repeat";
    // containerDetails.style.backgroundSize = "cover";
    containerDetails.style.backgroundSize = "100% 100%";
}

buildDetailsMovies()