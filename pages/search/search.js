var Search = function(element) {
  this.element = element;
  this.searchBar = element.querySelector('.search-bar');
  this.searchAutoComplete = element.querySelector('.search-autoComplete');
  this.searchLiveUpdates = element.querySelector('.search-liveUpdates');

  this.initEvents();
};

Search.prototype = {
  initEvents: function() {
    this.searchBar.addEventListener('keyup', this.onKeyUp.bind(this));
  },

  onKeyUp: function(event) {
    if (event.keyCode !== 38 && event.keyCode !== 40) {
      var characterCount = this.searchBar.value.length;
      if (characterCount === 1) {
        this.searchAutoComplete.classList.add('open');
        this.searchLiveUpdates.innerHTML = 'Use the up and down arrow keys to navigate through the suggestions or press enter to search.';
      } else if (characterCount > 1) {
        
      } else {
        this.searchAutoComplete.classList.remove('open');
        this.searchLiveUpdates.innerHTML = '';
      }
    } else {
      console.log('keypress');
    }
  }
}

var searchElement = document.querySelector('.searchBar');
var search = new Search(searchElement);
