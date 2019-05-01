import headerTemplate from './components/header/header.hbs';
import footerTemplate from './components/footer/footer.hbs';
import modalTemplate from './components/modal/modal.hbs';
import * as MiniCart from './components/mini-cart/mini-cart';
import * as GlobalNav from './components/header/global-navigation';
import * as Modal from './components/modal/modal';

// Global templating
const headerDOM = document.querySelector('[data-template="global-header"]');
const footerDOM = document.querySelector('[data-template="footer"]');
const modalDOM = document.querySelector('[data-template="modal"]');
if (headerDOM) headerDOM.outerHTML = headerTemplate();
if (footerDOM) footerDOM.outerHTML = footerTemplate();
if (modalDOM) modalDOM.outerHTML = modalTemplate();

// Global components
GlobalNav.init();
MiniCart.init();
Modal.init();
