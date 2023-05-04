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
    const movies = await data.json();
    recommendations(movies)
    

    movies.forEach(element => {
        createFavoritesList(element)
    });


}

favoritesMovie()

async function createFavoritesList(idMovie){
    

    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=pt-BR`)
    const movie = await data.json()

    
    // console.log(movie);
    const container = document.querySelector('#listMovieFavorites')


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
    // link.addEventListener('click', detailsMovie
}




async function interestList(){
    const data = await fetch('/interestList')
    const teste = await data.json();
    
    // console.log(teste)
    teste.forEach(element => {
        createInterestList(element)
    });
}

interestList()

async function createInterestList(idMovie){
    

    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=pt-BR`)
    const movie = await data.json()

    
    // console.log(movie);
    const container = document.querySelector('#listMovieInterest')

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
    // link.addEventListener('click', detailsMovie)
}


async function carousel(){
    const buttonRight = document.querySelectorAll('.buttonRight');
    const buttonLeft = document.querySelectorAll('.buttonLeft');

    const carousel = document.querySelector('.carousel');
    const carouselNow = document.querySelector('#carousel-interest')
    
    // console.log(carousel.scrollleft);
    
    buttonRight[0].addEventListener('click', event =>{
        carousel.scrollLeft += 1137;
    })

    buttonLeft[0].addEventListener('click', event =>{
        carousel.scrollLeft -=1137;
    })
    buttonRight[1].addEventListener('click', event =>{
        carouselNow.scrollLeft += 1137;
    })

    buttonLeft[1].addEventListener('click', event =>{
        carouselNow.scrollLeft -=1137;
    })
}


async function recommendations(favoritesMovies){
    // console.log(favoritesMovies);

   

    favoritesMovies.forEach(async element => {
         // Consulta na api de filmes pelo id para pegar o nome
        dataMovie = await fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=${api_key}&language=pt-BR`)
        moviesDetails = await dataMovie.json()
        // nome do filme
        const nameMovie = moviesDetails.title

        // Consulta api para pegar os filmes recomendados de acordo com o id do filme
        const data = await fetch(`https://api.themoviedb.org/3/movie/${element}/recommendations?api_key=${api_key}&page=1&language=pt-BR`)
        const movieRec = await data.json()

        // pegando os 8 primeiros filmes recomendados
        const movieTop8 = movieRec.results.slice(0,8)

        const h1TitleTopics = document.createElement('h1')
        h1TitleTopics.textContent = `Por que você assistiu ${nameMovie}`
        h1TitleTopics.id = 'recommendations'

        const divContainer = document.querySelector('.recommendations')

        const divWrapper = document.createElement('div')
        divWrapper.className = "wrapper wrapper-recommendations"

        const divCarousel = document.createElement('div')
        divCarousel.className = 'carousel'
        divCarousel.id = 'carousel-recommendations'

        const ulListMovie = document.createElement('ul')
        ulListMovie.className = 'listMovie'
        ulListMovie.id = 'listMovieRecommendations'

        divCarousel.append(h1TitleTopics)
        divCarousel.append(ulListMovie)
        divWrapper.append(divCarousel)
        divContainer.append(divWrapper)

        // Varrendo a lista com os 8 filmes e criando os banners para cada um
        movieTop8.forEach(item =>{
        
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'

            const link = document.createElement('a')
            link.href = `/detalhes?id=${item.id}`
            link.className = 'link-poster'

            const linkTitle = document.createElement('a')
            linkTitle.href = '#'
            linkTitle.className = 'link-title'

            const title = document.createElement('span')
            title.className = 'titleMovie'

            item.title ? title.textContent = item.title :title.textContent = item.name

            const poster = document.createElement('img')
            poster.className = 'posterMovie'
            poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
            poster.id = item.id

            if(item.poster_path == null){
                // poster.src = `../icon/filme.svg`
            }else{
                link.append(poster)
                linkTitle.append(title)
        
                containerMovie.append(link)
                containerMovie.append(linkTitle)
                ulListMovie.append(containerMovie)
                
            }

        })
        
    })

}
recommendations()
carousel()

