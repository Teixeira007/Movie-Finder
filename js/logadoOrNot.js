fetch('/userId')
  .then(response => response.json())
  .then(data => {
    const userId = data.userId;

    const btnLogin = document.querySelector('.login')
    const btnSignup = document.querySelector('.signup')
    const profile = document.querySelector('.profile')

    if (userId) {
        btnLogin.style.display = 'none'
        btnSignup.style.display = 'none'
        profile.style.display = 'block'
    } else {
        btnLogin.style.display = 'block'
        btnSignup.style.display = 'block'
        profile.style.display = 'none'
    }
});

