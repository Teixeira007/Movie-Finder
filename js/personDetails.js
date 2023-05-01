const api_key = 'df11c6ebfaff4552cd4ceb4187f105fb';

async function buildDetailsPerson(){
    const urlParams = new URLSearchParams(window.location.search)
    const idPerson = urlParams.get('id')

    const containerDetails = document.querySelector('.containerDetails')

    const data = await fetch(`https://api.themoviedb.org/3/person/${idPerson}?api_key=${api_key}&language=pt-BR`)
    const person = await data.json();

    console.log(person);

    const divInfoLeft = document.createElement('div')
    divInfoLeft.className = "info-left"

    const imgPerson = document.createElement('img')
    imgPerson.className = 'imgPerson'
    imgPerson.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`

    const divPersonalInfo = document.createElement('div')
    divPersonalInfo.className = 'personal-info'

    const titlePersonalH3 = document.createElement('h3')
    titlePersonalH3.className = 'title-personal'
    titlePersonalH3.textContent = `Informações Pessoais`

    const knownForDepartment = document.createElement('div')
    knownForDepartment.className = 'known_for_department personal-sub-info'

    titleDeparrment = document.createElement('p')
    titleDeparrment.className = 'sub-title'
    titleDeparrment.textContent = 'Conhecido(a) por'

    valueDepartment = document.createElement('p')
    valueDepartment.textContent = person.known_for_department

    knownForDepartment.append(titleDeparrment)
    knownForDepartment.append(valueDepartment)

    const divGender = document.createElement('div')
    divGender.className = 'gender personal-sub-info'

    const titleGender = document.createElement('p')
    titleGender.className = 'sub-title'
    titleGender.textContent = 'Gênero'

    const valueGender = document.createElement('p')
    if(person.gender == 1){
        valueGender.textContent = "Feminino"
    }else{
        valueGender.textContent = "Masculino"
    }

    divGender.append(titleGender)
    divGender.append(valueGender)

    const divBirthday = document.createElement('div')
    divBirthday.className = 'birthday personal-sub-info'

    const titleBirthday = document.createElement('p')
    titleBirthday.className = 'sub-title'
    titleBirthday.textContent = 'Nascimento'

    const valueBirthday = document.createElement('p')
    valueBirthday.textContent = person.birthday


    divBirthday.append(titleBirthday)
    divBirthday.append(valueBirthday)

    const divPlaceOfBirth = document.createElement('div')
    divPlaceOfBirth.className = 'place_of_birth personal-sub-info'

    const titlePlaceOfBirth = document.createElement('p')
    titlePlaceOfBirth.className = 'sub-title'
    titlePlaceOfBirth.textContent = 'Local de nascimento'

    const valuePlaceOfBirth = document.createElement('p')
    valuePlaceOfBirth.textContent = person.place_of_birth

    divPlaceOfBirth.append(titlePlaceOfBirth)
    divPlaceOfBirth.append(valuePlaceOfBirth)

    divInfoLeft.append(imgPerson)

    divPersonalInfo.append(titlePersonalH3)
    divPersonalInfo.append(knownForDepartment)
    divPersonalInfo.append(divGender)
    divPersonalInfo.append(divBirthday)
    divPersonalInfo.append(divPlaceOfBirth)

    divInfoLeft.append(divPersonalInfo)
    
    const divInfoRight = document.createElement('div')
    divInfoRight.className = 'info-right'

    const titleName = document.createElement('h2')
    titleName.className = 'title-name'
    titleName.textContent = person.name

    const divBiography = document.createElement('div')
    divBiography.className = 'biography-div'

    const titleBiography = document.createElement('p')
    titleBiography.className = 'title-biography'
    titleBiography.textContent = "Biografia"

    const valueBiography = document.createElement('p')
    valueBiography.className = 'biografy'
    valueBiography.textContent = person.biography

    divBiography.append(titleBiography)
    divBiography.append(valueBiography)

    const divMovies = document.createElement('div')
    divMovies.className = 'movies'

    const titleMovies = document.createElement('p')
    titleMovies.className ='title-movies'
    titleMovies.textContent = 'Conhecido(a) por'

    const divContainerMovies = document.createElement('div')
    divContainerMovies.className = 'containerMovies'

    divMovies.append(titleMovies)
    divMovies.append(divContainerMovies)

    divInfoRight.append(titleName)
    divInfoRight.append(divBiography)
    divInfoRight.append(divMovies)

    creditsPersonMovies(idPerson)

    containerDetails.append(divInfoLeft)
    containerDetails.append(divInfoRight)

}


async function creditsPersonMovies(idPerson){
    const data = await fetch(`https://api.themoviedb.org/3/person/${idPerson}/movie_credits?api_key=${api_key}&language=pt-BR`)
    const personMovies = await data.json()

    sortedMovies = personMovies.cast.sort((a,b) => b.popularity - a.popularity);

    const moviesTop10 = sortedMovies.slice(0,10)
    console.log(moviesTop10);

    const containerMovies = document.querySelector('.containerMovies')


    moviesTop10.forEach(element =>{
        const divMovie = document.createElement('div')
        divMovie.className = 'movie'

        const imgCast = document.createElement('img')
        imgCast.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`
        imgCast.className = 'imgMovie'
        imgCast.id = element.id

        if(element.poster_path == null){
            imgCast.src = `../icon/filme.svg`
        }

        const nameCast = document.createElement('p')
        nameCast.className = "nameMovie"
        nameCast.textContent = element.title

        const linkCast = document.createElement('a')
        linkCast.href = "/detalhes"

        linkCast.append(imgCast)
        divMovie.append(linkCast)
        divMovie.append(nameCast)

        containerMovies.append(divMovie)
        linkCast.addEventListener('click', detailsMovie)


    })


}

async function detailsMovie(event){
    event.preventDefault();
    const idMovie = event.target.id
    console.log('ate aqui');

    window.location.href =  `${event.target.parentNode.href}?id=${idMovie}` ;
}
buildDetailsPerson()