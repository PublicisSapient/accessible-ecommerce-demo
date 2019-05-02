import { trapTabKey, $$, setFocusToFirstItem } from '../../js/utils';

var Modal = function (element, mainSelector) {
    this.element = element;
    this.focusedElementBeforeModal;
    this.main = document.querySelector(mainSelector) || document.body;
  
    this.shown = false;
  
    this.initEvents();
  };
  
  Modal.prototype = {
    onKeyDown: function(event){
      if (this.shown && event.which === 27) {
        event.preventDefault();
        this.hide();
      }
  
      if (this.shown && event.which === 9) {
        trapTabKey(this.element, event);
      }
    },
    onFocus: function(){
      if (this.shown && !this.element.contains(event.target)) {
        setFocusToFirstItem(this.element);
      }
    },
    show: function() {
      this.shown = true;
      this.element.style.display='block';
      this.element.setAttribute('aria-hidden', 'false');
      this.element.setAttribute('aria-expanded', 'true');
      this.main.setAttribute('aria-hidden', 'true');
      this.focusedElementBeforeModal = document.activeElement;
      setFocusToFirstItem(this.element);
    },
    hide: function() {
      this.shown = false;
      this.element.style.display='none';
      this.element.setAttribute('aria-hidden', 'true');
      this.element.setAttribute('aria-expanded', 'false');
      this.main.setAttribute('aria-hidden', 'false');
      this.focusedElementBeforeModal.focus();
    },
    initEvents: function(){
      document.addEventListener('keydown', this.onKeyDown.bind(this));
  
      document.body.addEventListener('focus', this.onFocus.bind(this), true);

      $$('[data-modal-show="' + this.element.id + '"]').forEach( opener => opener.addEventListener('click', this.show.bind(this)) );

      $$('[data-modal-hide]', this.element).concat($$('[data-modal-hide="' + this.element.id + '"]')).forEach( closer => closer.addEventListener('click', this.hide.bind(this)) );
    }
  };
  
  /*
  var modalElements = document.querySelectorAll('.modal');
  modalElements.forEach(function (modalElement) {
    new Modal(modalElement, '#content');
  });
  */

  function init(modalElementID) {
    var modalElement = document.querySelector('#'+modalElementID);
    new Modal(modalElement, '#content');
  }

  export {init};
/*
function init(){
    const modal = document.getElementById('construction-modal');
    const buttons = document.getElementsByClassName('under-construction');
    var lastFocusedItem;
    for (var i=0; i < buttons.length; i++){
        //console.log(buttons[i]);
        buttons[i].addEventListener('click', function(){
            lastFocusedItem = this;
            modal.style.display = 'block';
            modal.getElementsByClassName('modal-close')[0].focus();
        });
    }
    const modalClose = document.getElementsByClassName('modal-close');
    for (var i=0; i < modalClose.length; i++){
        //console.log(modalClose[i]);
        modalClose[i].addEventListener('click', function(){
            modal.style.display = 'none';
            lastFocusedItem.focus();
        });
    }
    var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl; 
    if(focusableEls.length > 1)
        lastFocusableEl = focusableEls[focusableEls.length - 1];
    else
        lastFocusableEl = firstFocusableEl;
    const KEYCODE_TAB = 9;
    modal.addEventListener('keydown', function(e){
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
        if (!isTabPressed) { 
            return; 
        }
        if ( e.shiftKey ) {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    })
}
  
export { init };
*/