window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        document.body.style.overflow = "auto";
    }, 1000);
});
document.body.style.overflow = "hidden";