document.querySelectorAll(".platform-inner-title-container").forEach(item => {
    item.addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
    });
});