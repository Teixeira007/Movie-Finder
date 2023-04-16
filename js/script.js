const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';


async function popular(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`)
    const movies = await data.json()
    console.log(movies);

    const listMovie = document.getElementById('listMovie')
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

    const buttonRight = document.createElement('button')
    buttonRight.value= ">"
    buttonRight.className = "buttonRight"
    listMovie.append(buttonRight)

}
popular()


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
    const buttonRight = document.querySelector('.buttonRight');
    const buttonLeft = document.querySelector('.buttonLeft');

    const carousel = document.querySelector('.carousel');

    console.log(carousel.scrollleft);

    buttonRight.addEventListener('click', event =>{
        carousel.scrollLeft += 1137;
    })

    buttonLeft.addEventListener('click', event =>{
        carousel.scrollLeft -=1137;
    })
}
carousel()

searchMenu()


