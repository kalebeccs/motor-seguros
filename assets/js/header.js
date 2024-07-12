/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/*=============== VERIFY LOGIN ===============*/
const userHeader = JSON.parse(sessionStorage.getItem("user"));

if (userHeader == null) {
    /*=============== LOGIN ===============*/
    const login = document.getElementById('login'),
        loginBtn = document.getElementById('login-btn'),
        loginClose = document.getElementById('login-close')

    /* Login show */
    loginBtn.addEventListener('click', () => {
        login.classList.add('show-login')
    })

    /* Login hidden */
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login')
    })

    /*=============== SIGN UP ===============*/
    const signUp = document.getElementById('signUp'),
        signUpBtn = document.getElementById('login-signUp'),
        signUpClose = document.getElementById('signUp-close'),
        signUpToLogin = document.getElementById('signUp-log-in')

    /* Sign up show */
    signUpBtn.addEventListener('click', () => {
        signUp.classList.add('show-signUp');
        login.classList.remove('show-login');
    })

    /* Sign up hidden */
    signUpClose.addEventListener('click', () => {
        signUp.classList.remove('show-signUp');
    })

    /* Login show */
    signUpToLogin.addEventListener('click', () => {
        signUp.classList.remove('show-signUp');
        login.classList.add('show-login');
    })

    /*=============== FORGOT ===============*/
    const forgot = document.getElementById('forgot'),
        forgotBtn = document.getElementById('login-forgot'),
        forgotClose = document.getElementById('forgot-close'),
        forgotToLogin = document.getElementById('forgot-log-in')

    /* Forgot show */
    forgotBtn.addEventListener('click', () => {
        forgot.classList.add('show-forgot');
        login.classList.remove('show-login');
    })

    /* Forgot hidden */
    forgotClose.addEventListener('click', () => {
        forgot.classList.remove('show-forgot');
    })

    /* Login show */
    forgotToLogin.addEventListener('click', () => {
        forgot.classList.remove('show-forgot');
        login.classList.add('show-login');
    })
}