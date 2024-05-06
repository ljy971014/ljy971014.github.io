
function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    var currentPage = document.getElementById('page' + pageNumber);
    if (currentPage) {
      currentPage.style.display = 'block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('ul.cards');
    var cardStacks = document.querySelectorAll('ul.card-stacks');
    var cardsSplit = document.querySelectorAll('ul.cards-split');
    var cardsSplitDelay = document.querySelectorAll('ul.cards-split-delay');
  
    function toggleTransition(element) {
      element.classList.toggle('transition');
    }
  
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        toggleTransition(this);
      });
    });
  
    cardStacks.forEach(function(cardStack) {
      cardStack.addEventListener('click', function() {
        toggleTransition(this);
      });
    });
  
    cardsSplit.forEach(function(cardsSplitItem) {
      cardsSplitItem.addEventListener('click', function() {
        toggleTransition(this);
      });
    });
  
    cardsSplitDelay.forEach(function(cardsSplitDelayItem) {
      cardsSplitDelayItem.addEventListener('click', function() {
        toggleTransition(this);
      });
    });
  });
  