
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

/*===  Final section resposiva  === */

/*===  inicio section para arrastar livremente  === */

document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('compressor-img');
    const panzoom = Panzoom(image, {
    minScale: 0.1,
    maxScale: 1000,
    contain: 'false',
    canvas: true // permite arrastar livremente
    });
    // Zoom com roda do mouse
    image.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
});


/*====================================================================================== */
/*==============  Inicio function para adicionar produtos no carrinho lateral  ============== */
/*====================================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const purchaseButton = document.getElementById('purchaseButton');
    const cartBody = document.querySelector('.cart-table tbody');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalInfo = document.getElementById('modal-info');
    const closeBtn = document.querySelector('.close-btn');
    let cart = [];

    // Lista completa de produtos
    const products = {
        1: { name: 'Gasket set', image: 'images/1 - Gasket set.png', description: 'Peça de vedação para compressores.' },
        2: { name: 'Built-in motor', image: 'images/2 - Built-in motor.png', description: 'Motor embutido para alta performance.' },
        4: { name: 'Parallel key', image: 'images/4 - Parallel key.png', description: 'Chave paralela para fixação segura.' },
        5: { name: 'Washer', image: 'images/5 - Washer.png', description: 'Arruela para suporte mecânico.' },
        9: { name: 'Gasket ring', image: 'images/9 - Gasket ring.png', description: 'Descrição do item.' },
        10: { name: 'Bearing cover', image: 'images/10 - Bearing cover.png', description: 'Descrição do item.' },
        11: { name: 'Bearing bush', image: 'images/11 - Bearing bush.png', description: 'Descrição do item.' },
        13: { name: 'Oil splasher plate', image: 'images/13 - Oil splasher plate.png', description: 'Descrição do item.' },
        16: { name: 'Connecting rod - piston', image: 'images/16-1 - Connecting rod - piston.png', description: 'Descrição do item.' },
        23: { name: 'Eccentric shaft', image: 'images/23 - Eccentric shaft.png', description: 'Descrição do item.' },
        24: { name: 'Thrust washer', image: 'images/24 - Thrust washer.png', description: 'Descrição do item.' },
        25: { name: 'Bearing bush', image: 'images/25 - Bearing bush.png', description: 'Descrição do item.' },
        26: { name: 'Adjusting washer', image: 'images/26 - Adjusting washer.png', description: 'Descrição do item.' },
        27: { name: 'Shut-off valve', image: 'images/27 - Shut-off valve.png', description: 'Descrição do item.' },
        30: { name: 'Cylinder head', image: 'images/30 - Cylinder head.png', description: 'Descrição do item.' },
        33: { name: 'Valve plate', image: 'images/33 - Valve plate.png', description: 'Descrição do item.' },
        36: { name: 'Shut-off valve', image: 'images/36 - Shut-off valve.png', description: 'Descrição do item.' },
        39: { name: 'Suction gas filter', image: 'images/39 - Suction gas filter.png', description: 'Descrição do item.' },
        40: { name: 'Terminal plate', image: 'images/40.1 - Terminal plate.png', description: 'Descrição do item.' },
        47: { name: 'Gasket ring', image: 'images/47 - Gasket ring.png', description: 'Descrição do item.' },
        48: { name: 'Sight glass', image: 'images/48 - Sight glass.png', description: 'Descrição do item.' },
        50: { name: 'Terminal box', image: 'images/50 - Terminal box.png', description: 'Descrição do item.' },
        53: { name: 'Compressor protection device', image: 'images/50.1 - Compressor protection device.png', description: 'Descrição do item.' },
        55: { name: 'Housing cover', image: 'images/55 - Housing cover.png', description: 'Descrição do item.' },
        59: { name: 'Kit damper elements', image: 'images/59 - Kit damper elements.png', description: 'Descrição do item.' },
        60: { name: 'Kit damper elements', image: 'images/59 - Kit damper elements.png', description: 'Descrição do item.' },
        75: { name: 'Retrofit kit oil control', image: 'images/75 - Retrofit kit oil control.png', description: 'Descrição do item.' },
        76: { name: 'Sealing screw', image: 'images/76 - Sealing screw.png', description: 'Descrição do item.' },
        80: { name: 'Opto-electronic unit', image: 'images/80.1 - Opto-electronic unit.png', description: 'Descrição do item.' },
        91: { name: 'Plug', image: 'images/91 - Plug.png', description: 'Descrição do item.' },
        92: { name: 'Schrader valve', image: 'images/92 - Schrader valve.png', description: 'Descrição do item.' }
    };

    function renderCart() {
        cartBody.innerHTML = '';
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>Item ${item.id}, ${item.name}</td>
                <td>
                    <div class="quantity-controls">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td>
                    <img src="${item.image}" alt="${item.name}" class="cart-img" data-id="${item.id}" style="width:80px;height:80px;object-fit:cover;cursor:pointer;">
                </td>
            `;
            cartBody.appendChild(row);
        });
    }

    function addToCart(id) {
        const { name, image } = products[id];
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ id, name, image, quantity: 1 });
        }
        renderCart();
    }

    // Adiciona evento para todos os links com classe .add-product
    document.querySelectorAll('.add-product').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(link.dataset.id);
            addToCart(id);
        });
    });

    cartBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(i => i.id === id);
            item.quantity++;
            renderCart();
        }
        if (e.target.classList.contains('decrease')) {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(i => i.id !== id);
            }
            renderCart();
        }
    });

    // Abrir modal ao clicar na imagem
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-img')) {
            const id = parseInt(e.target.dataset.id);
            const product = products[id];
            modalImg.src = product.image;
            modalInfo.textContent = `Compressor-4EES-4 | ${product.name} | ${product.description}`;
            modal.style.display = 'flex';
        }
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    purchaseButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
        } else {
            alert('Compra finalizada com sucesso!');
            cart = [];
            renderCart();
        }
    });
});


