
document.addEventListener('DOMContentLoaded', async ()=> {
    const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';


    async function popular(){
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1&language=pt-BR&region=BR`)
        const movies = await data.json()
        console.log(movies);
    
        const listMovie = document.querySelector('#listMoviePopular')
        movies.results.forEach(element => {
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'
    
            const link = document.createElement('a')
            link.href = '/detalhes'
            link.className = 'link-poster'
          
    
            const linkTitle = document.createElement('a')
            linkTitle.href = '#'
            linkTitle.className = 'link-title'
            linkTitle.id = element.id
    
            const title = document.createElement('span')
            title.className = 'titleMovie'
            title.textContent = element.title
    
            const poster = document.createElement('img')
            poster.className = 'posterMovie'
            poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`
            poster.id = element.id
    
            link.append(poster)
            linkTitle.append(title)
    
            containerMovie.append(link)
            containerMovie.append(linkTitle)
            listMovie.append(containerMovie)
    
    
            link.addEventListener('click', detailsMovie)
        });
    
        
    
    }
    
    
    
    async function cartaz(){
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1&region=BR&language=pt-BR`)
        const movies = await data.json()
        console.log(movies);
    
        const listMovie = document.querySelector('#listMovieCartaz')
        movies.results.forEach(element => {
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'
    
            const link = document.createElement('a')
            link.href = '/detalhes'
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
            poster.id = element.id

    
            link.append(poster)
            linkTitle.append(title)
    
            containerMovie.append(link)
            containerMovie.append(linkTitle)
            listMovie.append(containerMovie)

            link.addEventListener('click', detailsMovie)
        });
    
    }
    
    async function trending(){
        const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=pt-BR&region=BR`)
        const movies = await data.json()
        console.log(movies);
    
        const listMovie = document.querySelector('#listMovieTrending')
        movies.results.forEach(element => {
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'
    
            const link = document.createElement('a')
            link.href = '/detalhes'
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
            poster.id = element.id
    
            link.append(poster)
            linkTitle.append(title)
    
            containerMovie.append(link)
            containerMovie.append(linkTitle)
            listMovie.append(containerMovie)

            link.addEventListener('click', detailsMovie)
        });
    }
    
    
    async function topRanqued(){
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1&language=pt-BR&region=BR`)
        const movies = await data.json()
        console.log(movies);
    
        const listMovie = document.querySelector('#listMovieTop')
        movies.results.forEach(element => {
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'
    
            const link = document.createElement('a')
            link.href = '/detalhes'
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
            poster.id = element.id
    
            link.append(poster)
            linkTitle.append(title)
    
            containerMovie.append(link)
            containerMovie.append(linkTitle)
            listMovie.append(containerMovie)

            link.addEventListener('click', detailsMovie)
        });
    }
    
    async function emBreve(){
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=pt-BR&page=1&region=BR`)
        const movies = await data.json()
        console.log(movies);
    
        const listMovie = document.querySelector('#listMovieBreve')
        movies.results.forEach(element => {
            const containerMovie = document.createElement('li')
            containerMovie.className = 'containerMovie'
    
            const link = document.createElement('a')
            link.href = '/detalhes'
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
            poster.id = element.id

            if(element.poster_path == null){
                poster.src = `../icon/filme.svg`
            }

    
            link.append(poster)
            linkTitle.append(title)
    
            containerMovie.append(link)
            containerMovie.append(linkTitle)
            listMovie.append(containerMovie)

            link.addEventListener('click', detailsMovie)
        });
    }
    
    popular()
    cartaz()
    trending()
    topRanqued()
    emBreve()
    
    // Função que passa o id do filme selecionado na url da pagina detalhes dos filmes
    async function detailsMovie(event){
        event.preventDefault();
        const idMovie = event.target.id
        console.log('ate aqui');

        window.location.href =  `${event.target.parentNode.href}?id=${idMovie}` ;
    }
    
    async function searchMenu(){
        const searchIcon = document.querySelector('.search-icon');
        const searchBox = document.querySelector('.search-box');
        const imgIconSearch = document.querySelector('.img-icon-search');
        
        searchIcon.addEventListener('click', event => {
            searchBox.style.display = "block"
            searchIcon.style.display = "none"
            const iconsMenuRight = document.querySelector('.icons-menu-right')
            
            const closeIcon = document.createElement('button')
            closeIcon.className = "closeIcon"
    
            const imgClose = document.createElement('img')
            imgClose.src = '../icon/close.png'
    
            closeIcon.append(imgClose)
            iconsMenuRight.append(closeIcon)
            // console.log(iconsMenuRight.style.flexDirection);
            iconsMenuRight.style.flexDirection = 'row-reverse'
    
    
            // const closeIcon = document.querySelector('.newClose');
            // console.log(closeIcon);
            closeIcon.addEventListener('click', event => {
            // console.log("close");
                searchBox.style.display = "none"
                closeIcon.style.display = "none"
                searchIcon.style.display = "block"
                iconsMenuRight.style.flexDirection = 'row'
            })
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
        const carouselBreve = document.querySelector('#carousel-breve')
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
        buttonRight[4].addEventListener('click', event =>{
            carouselBreve.scrollLeft += 1137;
        })
    
        buttonLeft[4].addEventListener('click', event =>{
            carouselBreve.scrollLeft -=1137;
        })
    }
    carousel()
    
    searchMenu()
    
    async function signupSignin(){
        const login = document.querySelector('.login')
        const signup = document.querySelector('.signup') 
        
        console.log(signup);
        
        login.addEventListener('click', event =>{
            event.preventDefault()
            window.location.href =  `/login?id=login`
        })
        
        signup.addEventListener('click', event =>{
            event.preventDefault()
            window.location.href =  `/cadastrar?id=cadastrar`
        })
    } 
    
    signupSignin()

    
})

