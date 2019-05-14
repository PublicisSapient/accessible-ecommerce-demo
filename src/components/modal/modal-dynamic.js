import renderModal from './modal-dynamic.hbs';
import { setFocusToFirstItem, trapTabKey } from '../../js/utils';

let contentWrapper;
let bodyChildren;
let originalContent = {};
let modalElement;
let mediaQueryList;
let focusedElementBeforeModal;

function onKeyDown(event) {
  if (event.which === 27) {
    event.preventDefault();
    closeModal(modalElement);
  }

  if (event.which === 9) {
    trapTabKey(modalElement, event);
  }
}

function moveChildren(childElements, toElement) {
  childElements.forEach(function pushChild(element) {
    toElement.appendChild(element);
  });
}

function disableBodyContent() {
  bodyChildren = Array.from(document.body.children);
  contentWrapper = document.createElement('div');
  moveChildren(bodyChildren, contentWrapper);
  contentWrapper.setAttribute('aria-hidden', 'true');
  document.body.appendChild(contentWrapper);
}

function storeOriginalElement(elementQuery) {
  originalContent.element = document.querySelector(elementQuery);
  originalContent.parent = originalContent.element.parentElement;
  originalContent.sibling = originalContent.element.nextSibling;

  return originalContent.element;
}

function createNewModal(elementQuery, modalId) {
  const modalPlaceholder = document.createElement('div');
  document.body.appendChild(modalPlaceholder);
  modalPlaceholder.outerHTML = renderModal({ modalId });
  document.body.classList.add('modal-open');

  const modalContent = storeOriginalElement(elementQuery);
  modalElement = document.querySelector(`#${modalId}`);
  modalElement.querySelector('.modal__inner').appendChild(modalContent);
  modalElement.querySelectorAll('[data-js="close-modal"]')
    .forEach(closeButton => closeButton.addEventListener('click', onCloseClick));
  setFocusToFirstItem(modalElement);
}

function closeModal(currentModal) {
  moveChildren(bodyChildren, document.body);
  document.body.classList.remove('modal-open');
  contentWrapper.remove();
  currentModal.remove();
  originalContent.parent.insertBefore(originalContent.element, originalContent.sibling);
  document.removeEventListener('keydown', onKeyDown);
  mediaQueryList.removeListener(checkBreakpoint);
  focusedElementBeforeModal.focus();
}

function onCloseClick(event) {
  const currentModal = event.target.closest('.modal');
  closeModal(currentModal);
}

function checkBreakpoint(event) {
  if (!event.matches) {
    closeModal(modalElement);
  }
}

function init(elementQuery, modalId) {
  focusedElementBeforeModal = document.activeElement;
  disableBodyContent();
  createNewModal(elementQuery, modalId);
  document.addEventListener('keydown', onKeyDown);
  mediaQueryList = window.matchMedia('(max-width: 760px)');
  mediaQueryList.addListener(checkBreakpoint);
}

export { init };
