document.addEventListener("DOMContentLoaded", () => {
  let total = 0;
  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total-num");

  const estiloCarrito = `
    #carrito-total {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #ffe4e1;
      color: #4b2e2e;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      z-index: 9999;
      font-size: 16px;
      max-width: 250px;
    }
    #carrito-total h4 {
      margin-top: 0;
      margin-bottom: 10px;
    }
    #lista-carrito {
      list-style: none;
      padding-left: 0;
      max-height: 150px;
      overflow-y: auto;
    }
    #lista-carrito li {
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .eliminar {
      background: none;
      border: none;
      color: red;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = estiloCarrito;
  document.head.appendChild(styleSheet);

  const botones = document.querySelectorAll('button[data-precio]');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const nombre = boton.getAttribute('data-nombre');
      const precio = parseFloat(boton.getAttribute('data-precio'));

      total += precio;
      totalSpan.textContent = total.toFixed(2);

      const li = document.createElement("li");
      li.innerHTML = `${nombre} - $${precio.toFixed(2)} <button class="eliminar">❌</button>`;
      listaCarrito.appendChild(li);

      li.querySelector(".eliminar").addEventListener("click", () => {
        total -= precio;
        totalSpan.textContent = total.toFixed(2);
        li.remove();
      });
    });
  });
  const botonComprar = document.getElementById("boton-comprar");



});
