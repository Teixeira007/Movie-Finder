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




