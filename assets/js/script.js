
/*===  inicio section resposiva  === */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



/*=== Inicio function Modal do carrinho master ==== */
const cartBtn = document.getElementById('cart-btn');
const masterModal = document.getElementById('master-modal');
const masterModalBody = document.getElementById('master-modal-body');
const closeMasterModalBtn = masterModal.querySelector('.close-btn');

cartBtn.addEventListener('click', () => {
  renderMasterModal();
  masterModal.style.display = 'flex';
});

function renderMasterModal() {
  const master = CartUtils.loadCart(CartUtils.CartKeys.master);
  masterModalBody.innerHTML = '';
  if (master.length === 0) {
    masterModalBody.innerHTML = '<p>Carrinho master está vazio.</p>';
    return;
  }
  master.forEach(item => {
    const div = document.createElement('div');
    div.className = 'master-item';
    div.innerHTML = `
      <p>${item.name} (${item.page})</p>
      ${item.image}
      <div class="quantity-controls">
        <button class="decrease" data-id="${item.id}" data-page="${item.page}">-</button>
        <span>${item.quantity}</span>
        <button class="increase" data-id="${item.id}" data-page="${item.page}">+</button>
      </div>
    `;
    masterModalBody.appendChild(div);
  });
}

// Eventos para aumentar/diminuir quantidade
masterModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('increase') || e.target.classList.contains('decrease')) {
    const id = parseInt(e.target.dataset.id);
    const page = e.target.dataset.page;
    const master = CartUtils.loadCart(CartUtils.CartKeys.master);
    const item = master.find(i => i.id === id && i.page === page);
    if (!item) return;
    const newQty = e.target.classList.contains('increase') ? item.quantity + 1 : item.quantity - 1;
    CartUtils.applyChangeFromMaster(id, page, newQty);
    renderMasterModal();

    // Dispara evento para atualizar carrinhos nas páginas
    window.dispatchEvent(new Event('cartUpdated'));
  }
});

// Fechar modal
closeMasterModalBtn.addEventListener('click', () => {
  masterModal.style.display = 'none';
  
});

masterModal.addEventListener('click', (e) => {
  if (e.target === masterModal) masterModal.style.display = 'none';
});
/*=== Final function Modal do carrinho master ==== */



