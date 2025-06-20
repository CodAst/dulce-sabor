document.addEventListener("DOMContentLoaded", () => {
  let total = 0;
  const listaCarrito = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total-num");

  // Botones para agregar productos al carrito
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
  if (botonComprar) {
    botonComprar.addEventListener("click", () => {
      if (total > 0) {
        alert("🧁 Dulce compra realizada");
      } else {
        alert("El carrito está vacío");
      }
    });
  }

  // CARRUSEL
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    if (slides.length > 0) {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }
  }, 3000);

  // CONTACTO
  const formContacto = document.getElementById("formContacto");

  if (formContacto) {
    formContacto.addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const tipoProducto = document.getElementById("tipoProducto").value;
      const comentarios = document.getElementById("comentarios").value;
      const aceptacion = document.getElementById("aceptacion").checked;

      console.log("Nombre:", nombre);
      console.log("Correo:", correo);
      console.log("Tipo de producto:", tipoProducto);
      console.log("Comentarios:", comentarios);
      console.log("Aceptación de términos:", aceptacion);

      if (!aceptacion) {
        alert("Debes aceptar los términos y condiciones.");
        return;
      }

      // Alerta de confirmación
      alert(`¡Gracias por contactarnos, ${nombre}!\n` +
            `Nos pondremos en contacto contigo a través del correo: ${correo}.\n` +
            `Tipo de producto: ${tipoProducto}\n` +
            `Comentarios: ${comentarios}`);

      // Limpiar el formulario
      formContacto.reset();
    });
  }
});
