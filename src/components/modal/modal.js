import { trapTabKey, $$, setFocusToFirstItem } from '../../js/utils';

var Modal = function (element, mainSelector) {
  this.element = element;
  this.focusedElementBeforeModal;
  this.main = document.querySelector(mainSelector) || document.body;

  this.shown = false;

  this.initEvents();
};

Modal.prototype = {
  onKeyDown: function (event) {
    if (this.shown && event.which === 27) {
      event.preventDefault();
      this.hide();
    }

    if (this.shown && event.which === 9) {
      trapTabKey(this.element, event);
    }
  },
  onFocus: function () {
    if (this.shown && !this.element.contains(event.target)) {
      setFocusToFirstItem(this.element);
    }
  },
  show: function (event) {
    event.preventDefault();
    this.shown = true;
    this.element.setAttribute('aria-hidden', 'false');
    this.element.setAttribute('aria-expanded', 'true');
    this.main.setAttribute('aria-hidden', 'true');
    document.body.classList.add('modal-open');
    this.focusedElementBeforeModal = document.activeElement;
    setFocusToFirstItem(this.element);
  },
  hide: function () {
    this.shown = false;
    this.element.setAttribute('aria-hidden', 'true');
    this.element.setAttribute('aria-expanded', 'false');
    this.main.setAttribute('aria-hidden', 'false');
    document.body.classList.remove('modal-open');
    this.focusedElementBeforeModal.focus();
  },
  initEvents: function () {

    document.addEventListener('keydown', this.onKeyDown.bind(this));

    document.body.addEventListener('focus', this.onFocus.bind(this), true);

    $$('[data-modal-show="' + this.element.id + '"]').forEach(opener => opener.addEventListener('click', this.show.bind(this)));

    $$('[data-modal-hide]', this.element).concat($$('[data-modal-hide="' + this.element.id + '"]')).forEach(closer => closer.addEventListener('click', this.hide.bind(this)));
  }
};

function init(modalElementID) {
  var modalElement = document.querySelector('#' + modalElementID);
  new Modal(modalElement, '#content');
}

export { init };
