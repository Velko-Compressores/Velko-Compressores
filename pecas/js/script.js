/*===  inicio section resposiva  === */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }



/*===  inicio section para arrastar livremente  === */

document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('tabela-img');
  const panzoom = Panzoom(image, {
      minScale: 0.1,
      maxScale: 1000,
      contain: 'false',
      canvas: true // permite arrastar livremente
  });
  image.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
});


