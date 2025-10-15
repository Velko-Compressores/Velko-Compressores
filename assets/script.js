
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);

    // Redireciona para PaginaHome/index.html
    window.location.href = "../Home/home.html";
  });
});


