
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showing');
            observer.unobserve(entry.target);
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});