export function initializeScrollTop() {
    function scrollTop(){
        const scrollTop = document.querySelector('#scroll-top');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)
}

export function instersectionView(container) {
    const observerOptions = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the element is in view
    };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (container.value) {
        observer.observe(container.value);
    }
}