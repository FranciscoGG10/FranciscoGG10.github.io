document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('miModal');
  var closeModalBtn = document.getElementById('cerrarModal');


  function openModal() {
      modal.style.display = 'block';
  }

 
  function closeModal() {
      modal.style.display = 'none';
  }


  closeModalBtn.addEventListener('click', closeModal);

  openModal();
  const title = document.querySelector('.animated-title');
  const text = "     Bienvenido a nuestra página";
  let index = 0;

  function typeText() {
      title.textContent = text.slice(0, index);
      index++;
      
      if (index > text.length) {
          setTimeout(function() {
              index = 0;
              typeText();  
          }, 3000);
      } else {
          setTimeout(typeText, 200);  
      }
  }

  typeText();
});
