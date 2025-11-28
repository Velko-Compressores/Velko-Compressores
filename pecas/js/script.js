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


/*===  inicio do modal para escolher o modelo do motor  === */

const modal = document.getElementById('modal');
const modalLinksContainer = document.getElementById('modal-links');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.svg-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Gerar links com os caminhos corretos fornecidos pelo usuário
    modalLinksContainer.innerHTML = `
      <a href="CE3-4FES-3/index.html">4FES-3</a>
      <a href="CE3-4FES-5/index.html">4FES-5</a>
      <a href="CE3-4FC3.2/index.html">4FC-3.2</a>
      <a href="CE3-4FC5.2/index.html">4FC-5.2</a>
    `;

    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

