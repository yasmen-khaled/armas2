const searchInput = document.getElementById('search-input');
const cardList = document.querySelector('.card-list');
const cards = cardList.querySelectorAll('.card');

searchInput.addEventListener('input', function(event) {
  const searchText = event.target.value.toLowerCase();

  cards.forEach(function(card) {
    const name = card.querySelector('h3').textContent.toLowerCase();
    if (name.includes(searchText)) {
      // نقل البطاقة المطابقة إلى بداية القائمة
      cardList.insertBefore(card, cardList.firstChild);
      card.style.display = 'block';
    } else {
     card.style.display = 'none';
    }
  });
});