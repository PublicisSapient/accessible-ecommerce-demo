import * as Modal from '../../components/modal/modal';
Modal.init('construction-modal');

/* Key Link Functions  */

setTimeout(() => {
  let keyLinks = document.getElementById('key-link-container');
  keyLinks.onkeydown = onKeyLinkPress;
}, 1000)

function onKeyLinkPress(e) {
  console.log('triggered???')
  if (e.code === 'KeyS') {
    let node = document.getElementById('global-header__search-input')
    node && node.focus()
  }
  if (e.code === 'KeyP') {
    let node = document.getElementById('main-nav-women')
    node && node.focus()
  }
  if (e.code === 'KeyC') {
    let node = document.getElementById('mini-cart-button')
    node && node.focus()
  }
  if (e.code === 'KeyA') {
    let node = document.getElementById('footer_statement-link')
    node && node.focus()
  }
  if (e.code === 'KeyU') {
    let node = document.getElementById('about-us-link')
    node && node.focus()
  }
  if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
    e.preventDefault()
    nextLink()
  }
  if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
    e.preventDefault()
    prevLink()
  }
}

function nextLink() {
  let next
  switch (document.activeElement.id) {
    case 's4search':
      next = document.getElementById('p4products')
      next.focus()
      break;
    case 'p4products':
      next = document.getElementById('c4cart')
      next.focus()
      break;
    case 'c4cart':
      next = document.getElementById('a4a11y')
      next.focus()
      break;
    case 'a4a11y':
      next = document.getElementById('u4about')
      next.focus()
      break;
    case 'u4about':
      break;
    default:
      next = document.getElementById('s4search')
      next.focus()
      break;
  }
}

function prevLink() {
  let next
  switch (document.activeElement.id) {
    case 's4search':
      break;
    case 'p4products':
      next = document.getElementById('s4search')
      next.focus()
      break;
    case 'c4cart':
      next = document.getElementById('p4products')
      next.focus()
      break;
    case 'a4a11y':
      next = document.getElementById('c4cart')
      next.focus()
      break;
    case 'u4about':
      next = document.getElementById('a4a11y')
      next.focus()
      break;
    default:
      next = document.getElementById('u4about')
      next.focus()
      break;
  }
}

/* End Key Link Functions */