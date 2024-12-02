const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click",() => {
      const offset = button.dataset.carouselButton === "next" ? 1: -1
      const slides = button
         .closest("[data-carousel]")
         .querySelector('[data-slides]')
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0
    
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
})

document.querySelectorAll('.open-modal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});