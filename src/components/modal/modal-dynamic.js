import renderModal from './modal-dynamic.hbs';

function init() {
  const newModal = document.createElement('div');
  const contentWrapper = document.createElement('div');
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(function pushIntoWrapper(element) {
    contentWrapper.appendChild(element);
  });
  contentWrapper.setAttribute('aria-hidden', 'true');
  document.body.appendChild(contentWrapper);
  document.body.classList.add('modal-open');
  document.body.appendChild(newModal);
  newModal.outerHTML = renderModal();
}

export { init };
