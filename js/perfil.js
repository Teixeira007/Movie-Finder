const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';

const iconUser = document.querySelector('.iconUser')
const nameProfile = document.querySelector('.name-profile')
const dateProfile = document.querySelector('.date-profile')

const firstLetter = iconUser.innerHTML.split('')[0]
const firstWord = nameProfile.innerHTML.split(' ')[0]
const dateFormat = dateProfile.innerHTML.split(' ')

const day = dateFormat[2]
const month = dateFormat[1]
const year = dateFormat[3]



iconUser.textContent = firstLetter;
nameProfile.textContent = firstWord;
dateProfile.textContent = `Menbro desde do dia ${day} de ${month} de ${year} `



async function favoritesMovie(){
    const data = await fetch('/favoritesMovie')
    const teste = await data.json();
    
    console.log(teste)
    teste.forEach(element => {
        createFavoritesList(element)
    });
}

favoritesMovie()

async function createFavoritesList(idMovie){
    

    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=pt-BR`)
    const movie = await data.json()

    
    console.log(movie);
    const container = document.querySelector('#listMovieFavorites')

    // const titleFavorites = document.createElement('h3')
    // titleFavorites.textContent = "Lista de Filmes Favoritos"
    // titleFavorites.className = 'titleFavorites'

    const containerMovie = document.createElement('li')
    containerMovie.className = 'containerMovie'

    const link = document.createElement('a')
    link.href = `/detalhes?id=${idMovie}`
    link.className = 'link-poster'

    const linkTitle = document.createElement('a')
    linkTitle.href = '#'
    linkTitle.className = 'link-title'

    const title = document.createElement('span')
    title.className = 'titleMovie'

    movie.title ? title.textContent = movie.title :title.textContent = movie.name

    const poster = document.createElement('img')
    poster.className = 'posterMovie'
    poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    poster.id = movie.id

    link.append(poster)
    linkTitle.append(title)

    // containerMovie.append(titleFavorites)
    containerMovie.append(link)
    containerMovie.append(linkTitle)
    container.append(containerMovie)
    link.addEventListener('click', detailsMovie)
}
