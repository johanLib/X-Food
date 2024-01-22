export function initializeDarkMode() {
    let darkmode = document.querySelector('#darkmode');
    let logo = document.querySelector('#logo');
    let footerlogo = document.querySelector('#footerlogo');
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')) {
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('dark');
            logo.src = '../logo-white.png';
            footerlogo.src = '../logo-white.png';
        }else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('dark');
            logo.src = '../logo.png';
            footerlogo.src = '../logo.png';
        }
    }
}
export function initializeMenuToggle() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };
}
export function initializeScrollTop() {
    function scrollTop(){
        const scrollTop = document.querySelector('#scroll-top');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)
}
export function initializeSearch() {
const search = document.querySelector('#search'),
      searchBtn = document.querySelector('#search-btn'),
      searchClose = document.querySelector('#search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})
}
export function initializeLogin() {
const login = document.querySelector('#login'),
      loginBtn = document.querySelector('#login-btn'),
      loginClose = document.querySelector('#login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})
}