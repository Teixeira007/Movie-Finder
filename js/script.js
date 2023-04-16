const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';


async function popular(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`)
    const movies = await data.json()
    console.log(movies);

    const container = document.getElementById('container')
    movies.results.forEach(element => {
        const containerMovie = document.createElement('div')
        containerMovie.className = 'containerMovie'

        const link = document.createElement('a')
        link.href = 'google.com'

        const title = document.createElement('span')
        title.className = 'titleMovie'
        title.textContent = element.title

        const poster = document.createElement('img')
        poster.className = 'posterMovie'
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`

        link.append(poster)

        containerMovie.append(link)
        containerMovie.append(title)
        container.append(containerMovie)
    });

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

searchMenu()


