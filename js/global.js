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

searchMenu()
async function subMenuProfile(){
    const profile = document.querySelector('.profile')

    profile.addEventListener('click', event=>{
        const divSubMenu = document.querySelector('.profile-submenu')
        if(divSubMenu.style.display == 'flex'){
            divSubMenu.style.display = 'none'
        }else{
            divSubMenu.style.display = 'flex'

        }
    })
}

subMenuProfile()