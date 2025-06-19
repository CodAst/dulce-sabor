document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 3000);
  });

  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total-num");
  let carrito = [];

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
      total += item.precio * item.cantidad;

      const li = document.createElement("li");
      li.innerHTML = `
        ${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}
        <button class="restar" data-index="${index}">➖</button>
        <button class="sumar" data-index="${index}">➕</button>
        <button class="eliminar" data-index="${index}">❌</button>
      `;
      listaCarrito.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);

    // Eventos para los botones
    document.querySelectorAll(".sumar").forEach(btn =>
      btn.addEventListener("click", () => {
        const i = btn.getAttribute("data-index");
        carrito[i].cantidad++;
        actualizarCarrito();
      })
    );

    document.querySelectorAll(".restar").forEach(btn =>
      btn.addEventListener("click", () => {
        const i = btn.getAttribute("data-index");
        if (carrito[i].cantidad > 1) {
          carrito[i].cantidad--;
        } else {
          carrito.splice(i, 1);
        }
        actualizarCarrito();
      })
    );

    document.querySelectorAll(".eliminar").forEach(btn =>
      btn.addEventListener("click", () => {
        const i = btn.getAttribute("data-index");
        carrito.splice(i, 1);
        actualizarCarrito();
      })
    );
  }

  document.querySelectorAll('button[data-precio]').forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-nombre");
      const precio = parseFloat(boton.getAttribute("data-precio"));

      const existe = carrito.find(item => item.nombre === nombre);
      if (existe) {
        existe.cantidad++;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      actualizarCarrito();
    });
  });

  // Estilo dinámico del carrito
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
      flex-direction: column;
    }
    .sumar, .restar, .eliminar {
      margin-top: 4px;
      background: none;
      border: none;
      color: #4b2e2e;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
    }
    .eliminar {
      color: red;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = estiloCarrito;
  document.head.appendChild(styleSheet);
