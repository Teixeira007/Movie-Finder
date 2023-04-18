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

    const contGenres = moviesDetails.genres.length;
    for(let i=0; i<contGenres;i++){
        gender.textContent += ` - ${moviesDetails.genres[i].name} `
    }

    if(moviesDetails.overview == ""){
        const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}`)
        const moviesDetailsNoBr = await data.json()
        const sinopse = document.querySelector('.sinopseValue')
        sinopse.textContent = moviesDetailsNoBr.overview

        const tagline = document.querySelector('.tagline')
        tagline.textContent = moviesDetailsNoBr.tagline
    }else{
        const sinopse = document.querySelector('.sinopseValue')
        sinopse.textContent = moviesDetails.overview

        const tagline = document.querySelector('.tagline')
        tagline.textContent = moviesDetails.tagline
    }

 
    containerDetails.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${moviesDetails.backdrop_path})`
    // containerDetails.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${moviesDetails.poster_path})`

    containerDetails.style.backgroundRepeat = "no-repeat";
    containerDetails.style.backgroundSize = "cover";
    // containerDetails.style.backgroundSize = "cover";

    const divBackgroundShadow = document.createElement('div')
    divBackgroundShadow.className = 'divShadow'

    containerDetails.append(divBackgroundShadow)
}


async function mouseOverList(){

    const buttonLikedList = document.querySelector('.likedList')
    
    buttonLikedList.addEventListener('mouseover', event =>{

    })
}

buildDetailsMovies()