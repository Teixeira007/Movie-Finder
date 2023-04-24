const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';

async function buildDetailsMovies(){
    const urlParams = new URLSearchParams(window.location.search)
    const idMovie = urlParams.get('id')
    // console.log(idMovie);

    const containerDetails = document.querySelector('.containerDetails')
    

    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=pt-BR`)
    const moviesDetails = await data.json()
    // console.log(moviesDetails);

    
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
        console.log(moviesDetailsNoBr);
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

    credits(idMovie)
    cast(idMovie)
    resenha(idMovie)
    
}


async function mouseOverList(){

    const buttonLikedList = document.querySelector('.buttonLikedList')
    const spanLikedList = document.querySelector('.likedList')

    const buttonInterestList = document.querySelector('.buttonInterestList')
    const spanInterestList = document.querySelector('.interestList')

    const buttonToAssess = document.querySelector('.buttonToAssess')
    const spanToAssess = document.querySelector('.toAssess')



    buttonLikedList.addEventListener('mouseover', event =>{
        spanLikedList.style.display = 'block';
    })

    buttonLikedList.addEventListener('mouseout', event =>{
        spanLikedList.style.display = 'none'
    })


    buttonInterestList.addEventListener('mouseover', event =>{
        spanInterestList.style.display = 'block';
    })

    buttonInterestList.addEventListener('mouseout', event =>{
        spanInterestList.style.display = 'none'
    })

    buttonToAssess.addEventListener('mouseover', event =>{
        const star = document.querySelector('.toAssessStar')
        if(star.style.display == 'flex'){

        }else{
            spanToAssess.style.display = 'block';
        }
    })

    buttonToAssess.addEventListener('mouseout', event =>{
        spanToAssess.style.display = 'none'
    })


}


async function credits(idMovie){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${api_key}&language=en-US`)
    const moviesCredits = await data.json()

    const credits = moviesCredits.crew.filter(a => a.job == "Characters" || a.job == "Writer" || a.job == "Director" || a.job == "Story");

    const infoCredits = document.querySelector('.info-creditos');
    credits.forEach(element => {
        const divCredits = document.createElement('div')

        const nameCredtits = document.createElement('p')
        nameCredtits.className = "nameCredits"
        nameCredtits.textContent = element.name;

        const jobCredits = document.createElement('p')
        jobCredits.className = "jobCredits"
        jobCredits.textContent = element.job

        const linkPerson = document.createElement('a')
        linkPerson.id = element.id
        linkPerson.className = "linkPerson";
        linkPerson.href = "#"

        linkPerson.append(nameCredtits)
        divCredits.append(linkPerson)
        divCredits.append(jobCredits)
        infoCredits.append(divCredits)
    })
}

async function cast(idMovie){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${api_key}&language=en-US`)
    const moviesCredits = await data.json()

    // console.log(moviesCredits);
    const cast = moviesCredits.cast.filter(a => a.known_for_department == "Acting");
    // console.log(cast);

    const divCast = document.querySelector('.cast')
    cast.forEach(element => {
        const nameCast = document.createElement('p')
        nameCast.className = "nameCast"
        nameCast.textContent = element.name

        const characterCast = document.createElement('p')
        characterCast.className = "characterCast"
        characterCast.textContent = element.character

        const imgCast = document.createElement('img')
        imgCast.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`
        imgCast.className = "imgCast"

        if(element.profile_path == null){
            imgCast.src = `../icon/user-100.svg`
        }

        const linkCast = document.createElement('a')
        linkCast.href = "#"
        linkCast.id = element.id

        const divPerson = document.createElement('div')
        divPerson.className = "person"

        linkCast.append(imgCast)
        divPerson.append(linkCast)
        divPerson.append(nameCast)
        divPerson.append(characterCast)
        divCast.append(divPerson)
    })

}

async function resenha(idMovie){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}/reviews?api_key=${api_key}&language=pt-BR&page=1`)
    const moviesResenha = await data.json()
    // console.log(moviesResenha);

    const containerResenha = document.querySelector('.container-resenha')

    if(moviesResenha.results.length == 0){
        const listEmpty = document.createElement('p')
        listEmpty.textContent = "Não tem nenhuma resenha sobre esse filme, porque você não deixa a primeira"
        
        containerResenha.append(listEmpty)
    }
    moviesResenha.results.forEach(element => {
        

        const divResenha = document.createElement('div')
        divResenha.className = 'resenha'
        
        const imgAvatar = document.createElement('img')
        imgAvatar.src = `https://image.tmdb.org/t/p/w500${element.author_details.avatar_path}`
        imgAvatar.className = 'avatar'

        const infoResenha = document.createElement('div')
        infoResenha.className = 'info-resenha'

        const info = document.createElement('div')
        info.className = 'infos'

        const titleResenha = document.createElement('p')
        titleResenha.className = 'title-resenha'
        titleResenha.textContent = `Uma resenha escrita por ${element.author}`

        const dateResenha = document.createElement('p')
        dateResenha.className = 'date-resenha'
        const date = element.created_at
        const dateFormat = date.split('T')
        dateResenha.textContent = `Escrita em ${dateFormat[0]}`

        const assessResenha = document.createElement('p')
        assessResenha.className = 'assess-resenha'
        assessResenha.textContent = element.author_details.rating

        const contentResenha = document.createElement('p')
        contentResenha.className = 'content-resenha'
        contentResenha.textContent = element.content

        const divAssess = document.createElement('div')
        divAssess.className = 'divAssess'

        const imgIcon = document.createElement('img')
        imgIcon.src = '../icon/avaliar.png'
        imgIcon.className = 'iconAssess'

        info.append(titleResenha)
        info.append(dateResenha)

        divAssess.append(imgIcon)
        divAssess.append(assessResenha)

        infoResenha.append(info)
        infoResenha.append(divAssess)

        divResenha.append(imgAvatar)
        divResenha.append(infoResenha)
        // divResenha.append(contentResenha)

        containerResenha.append(divResenha)
        containerResenha.append(contentResenha)
    })

}

async function eventsButtonsList(){
    const buttonLikedList = document.querySelector('.buttonLikedList')
    const buttonInterestList = document.querySelector('.buttonInterestList')
    const buttonToAssess = document.querySelector('.buttonToAssess')
    const urlParams = new URLSearchParams(window.location.search)
    const idMovie = urlParams.get('id')
    // console.log(idMovie)

    buttonInterestList.addEventListener('click', event =>{

        // createFavoritesList(idMovie);
        fetch(`/favoritesMovie/${idMovie}`, {
            method: 'POST',
            credentials: 'same-origin'
        })
        .then(response =>{
            if(response.ok) console.log('filme adicionado a lista')
            else{
                console.log('Filme não cadastrado')
            }
        }).catch(error =>{
            console.log(error);
        })

    })

    buttonLikedList.addEventListener('click', event=>{
        fetch(`/interestList/${idMovie}`, {
            method: 'POST',
            credentials: 'same-origin'
        })
        .then(response =>{
            if(response.ok) console.log('filme adicionado a lista')
            else{
                console.log('Filme não cadastrado')
            }
        }).catch(error =>{
            console.log(error);
        })
    })

    buttonToAssess.addEventListener('click', event =>{
        const star = document.querySelector('.toAssessStar')
        const spanToAssess = document.querySelector('.toAssess')

        star.style.display = 'flex'
        spanToAssess.style.display = 'none'
    })

}

async function toAssessStar(){
    const stars = document.querySelectorAll('.star')
    stars.forEach(element => {
        element.addEventListener('click', event=>{
            const note = element.id.split('_')[1]
            toAssessStarNote(note)
        })
    })
}

async function toAssessStarNote(note){
    const urlParams = new URLSearchParams(window.location.search)
    const idMovie = urlParams.get('id')
    // console.log(idMovie);
    // console.log(note);

      fetch(`/rating/${idMovie}/${note}`, {
        method: 'POST',
        credentials: 'same-origin'
    })
    .then(response =>{
        if(response.ok) console.log('filme avaliado')
        else{
            console.log('Filme não avaliado')
        }
    }).catch(error =>{
        console.log(error);
    })

    const star = document.querySelector('.toAssessStar')
    star.style.display = 'none'
}
toAssessStar()
mouseOverList()
buildDetailsMovies()
eventsButtonsList()