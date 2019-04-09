import headerTemplate from './components/header/header.hbs';
import footerTemplate from './components/footer/footer.hbs';
import * as MiniCart from './components/mini-cart/mini-cart';
import * as GlobalNav from './components/header/global-navigation';

// Global templating
const headerDOM = document.querySelector('[data-template="global-header"]');
const footerDOM = document.querySelector('[data-template="footer"]');
if (headerDOM) headerDOM.outerHTML = headerTemplate();
if (footerDOM) footerDOM.outerHTML = footerTemplate();

// Global components
GlobalNav.init();
MiniCart.init();