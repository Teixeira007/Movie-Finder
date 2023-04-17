const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';


async function popular(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`)
    const movies = await data.json()
    console.log(movies);

    const listMovie = document.querySelector('#listMoviePopular')
    movies.results.forEach(element => {
        const containerMovie = document.createElement('li')
        containerMovie.className = 'containerMovie'

        const link = document.createElement('a')
        link.href = 'google.com'
        link.className = 'link-poster'

        const linkTitle = document.createElement('a')
        linkTitle.href = '#'
        linkTitle.className = 'link-title'

        const title = document.createElement('span')
        title.className = 'titleMovie'
        title.textContent = element.title

        const poster = document.createElement('img')
        poster.className = 'posterMovie'
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`

        link.append(poster)
        linkTitle.append(title)

        containerMovie.append(link)
        containerMovie.append(linkTitle)
        listMovie.append(containerMovie)
    });

    

}



async function cartaz(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1`)
    const movies = await data.json()
    console.log(movies);

    const listMovie = document.querySelector('#listMovieCartaz')
    movies.results.forEach(element => {
        const containerMovie = document.createElement('li')
        containerMovie.className = 'containerMovie'

        const link = document.createElement('a')
        link.href = 'google.com'
        link.className = 'link-poster'

        const linkTitle = document.createElement('a')
        linkTitle.href = '#'
        linkTitle.className = 'link-title'

        const title = document.createElement('span')
        title.className = 'titleMovie'
        title.textContent = element.title

        const poster = document.createElement('img')
        poster.className = 'posterMovie'
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`

        link.append(poster)
        linkTitle.append(title)

        containerMovie.append(link)
        containerMovie.append(linkTitle)
        listMovie.append(containerMovie)
    });

}

async function trending(){
    const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
    const movies = await data.json()
    console.log(movies);

    const listMovie = document.querySelector('#listMovieTrending')
    movies.results.forEach(element => {
        const containerMovie = document.createElement('li')
        containerMovie.className = 'containerMovie'

        const link = document.createElement('a')
        link.href = 'google.com'
        link.className = 'link-poster'

        const linkTitle = document.createElement('a')
        linkTitle.href = '#'
        linkTitle.className = 'link-title'

        const title = document.createElement('span')
        title.className = 'titleMovie'

        element.title ? title.textContent = element.title :title.textContent = element.name

        const poster = document.createElement('img')
        poster.className = 'posterMovie'
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`

        link.append(poster)
        linkTitle.append(title)

        containerMovie.append(link)
        containerMovie.append(linkTitle)
        listMovie.append(containerMovie)
    });
}


async function topRanqued(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`)
    const movies = await data.json()
    console.log(movies);

    const listMovie = document.querySelector('#listMovieTop')
    movies.results.forEach(element => {
        const containerMovie = document.createElement('li')
        containerMovie.className = 'containerMovie'

        const link = document.createElement('a')
        link.href = 'google.com'
        link.className = 'link-poster'

        const linkTitle = document.createElement('a')
        linkTitle.href = '#'
        linkTitle.className = 'link-title'

        const title = document.createElement('span')
        title.className = 'titleMovie'

        element.title ? title.textContent = element.title :title.textContent = element.name

        const poster = document.createElement('img')
        poster.className = 'posterMovie'
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`

        link.append(poster)
        linkTitle.append(title)

        containerMovie.append(link)
        containerMovie.append(linkTitle)
        listMovie.append(containerMovie)
    });
}

popular()
cartaz()
trending()
topRanqued()



async function searchMenu(){
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
    
    searchIcon.addEventListener('mouseover', event => {
        searchBox.style.display = "block"
    })

    searchIcon.addEventListener('click', event => {
        console.log("Buscando");
        const nameSearch = searchBox.value
    })

    searchBox.addEventListener('keydown', function(event){
        if(event.key == "Enter"){
            const nameSearch = searchBox.value
            console.log("Buscando");
        }
    })

}


async function carousel(){
    const buttonRight = document.querySelectorAll('.buttonRight');
    const buttonLeft = document.querySelectorAll('.buttonLeft');

    const carousel = document.querySelector('.carousel');
    const carouselNow = document.querySelector('#carousel-now')
    const carouselCartaz = document.querySelector('#carousel-cartaz')
    const carouselTop = document.querySelector('#carousel-top')
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
    buttonRight[2].addEventListener('click', event =>{
        carouselCartaz.scrollLeft += 1137;
    })

    buttonLeft[2].addEventListener('click', event =>{
        carouselCartaz.scrollLeft -=1137;
    })

    buttonRight[3].addEventListener('click', event =>{
        carouselTop.scrollLeft += 1137;
    })

    buttonLeft[3].addEventListener('click', event =>{
        carouselTop.scrollLeft -=1137;
    })
}
carousel()

searchMenu()


