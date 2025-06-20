document.addEventListener("DOMContentLoaded", () => {
  let total = 0;
  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total-num");

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

  // ALERTA DE PAGO
  const botonComprar = document.getElementById("boton-comprar");
  botonComprar.addEventListener("click", () => {
    if (total > 0) {
      alert("🧁 Dulce compra realizada");
    } else {
      alert("El carrito está vacío");
    }
  });

  //CARRUSEL
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 3000);
  });
});
