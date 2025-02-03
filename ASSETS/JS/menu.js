document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".menu").style.display = 
        document.querySelector(".menu").style.display === "flex" ? "none" : "flex";
});