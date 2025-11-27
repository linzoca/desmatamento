

document.addEventListener("DOMContentLoaded", () => {
  
  const cards = document.querySelectorAll('.card');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.close');

  // abrir modal ao clicar no card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-modal');
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'flex';
    });
  });

  // fechar modal ao clicar no X
  closes.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  // fechar ao clicar fora
  window.addEventListener('click', event => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

});