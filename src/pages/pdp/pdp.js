import * as breadcrumb from '../../components/breadcrumb/breadcrumb';
import * as productDetails from '../../components/product-details/product-details';
import * as productDetailsAccordion from '../../components/product-details-accordion/product-details-accordion';
import * as productGallery from '../../components/gallery/gallery';
import * as productForm from '../../components/product-form/product-form';
import { setPageTitle } from '../../js/utils';
import * as productDB from '../../js/pouchdb';
import * as Modal from '../../components/modal/modal';

(function pdpPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = parseInt(urlParams.get('product_id'));
  const mediaQueryList = window.matchMedia('(min-width: 760px)');
  const galleryPusher = {};
  const isGalleryMoved = () => galleryPusher.elem.parentNode !== galleryPusher.parent;

  if (!product_id) {
    document.querySelector('.error-message').classList.remove('hidden');
    return false;
  }

  function doSingleColumn() {
    if (!isGalleryMoved()) {
      galleryPusher.targetParent.insertBefore(
        galleryPusher.elem,
        galleryPusher.targetSibling
      );
    }
  }

  function doTwoColumns() {
    if (isGalleryMoved()) {
      galleryPusher.parent.insertBefore(
        galleryPusher.elem,
        galleryPusher.sibling
      );
    }
  }

  function setupDOMColumns() {
    galleryPusher.elem = document.querySelector(
      '[data-component="gallery"]'
    );
    galleryPusher.parent = galleryPusher.elem.parentNode;
    galleryPusher.sibling = galleryPusher.elem.nextSibling;
    galleryPusher.targetSibling = document.querySelector('[data-js="gallery-target-sibling"]');
    galleryPusher.targetParent = galleryPusher.targetSibling.parentNode;
    if (!mediaQueryList.matches) {
      doSingleColumn();
    }
  }

  function onBreakpointToggle(event) {
    const isTwoColumnWidth = event.currentTarget.matches;
    if (!isTwoColumnWidth && !isGalleryMoved()) {
      doSingleColumn();
    } else if (isTwoColumnWidth && isGalleryMoved()) {
      doTwoColumns();
    }
  }

  function loadProductData() {
    productDB.getSingleRow(product_id).then(function (res) {
      const productData = res.docs[0];
      const breadcrumbs = [
        { label: 'Home', link: '../index.html' },
        { label: productData.category, link: '../plp/index.html' },
        { label: productData.subcategory, link: '../plp/index.html' },
        { label: productData.product_name }
      ];
      setPageTitle(['Women', 'Women’s Tops', productData.product_name]);
      breadcrumb.init(breadcrumbs);
      productDetails.init(productData);
      productGallery.init(productData);

      const productFormEl = document.querySelector(
        '[data-component="product-form"]'
      );

      setupDOMColumns();
      productForm.init(productFormEl);
      productDetailsAccordion.init(productData);
      mediaQueryList.addListener(onBreakpointToggle);
      Modal.init('construction-modal');
    });
  }
  productDB.init().then(loadProductData);
})();

/* Key Link Functions  */

setTimeout(() => {
  let keyLinks = document.getElementById('key-link-container');
  keyLinks.onkeydown = onKeyLinkPress;
}, 1000)

function onKeyLinkPress(e) {
  if (e.code === 'KeyD') {
    let node = document.getElementById('product-description')
    node && node.focus()
  }
  if (e.code === 'KeyR') {
    let node = document.getElementById('product-reviews')
    node && node.focus()
  }
  if (e.code === 'KeyS') {
    let node = document.getElementById('size-chart')
    node && node.focus()
  }
  if (e.code === 'KeyB') {
    let node = document.getElementById('add-to-cart')
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
    case 'd4description':
      next = document.getElementById('r4ratings')
      next.focus()
      break;
    case 'r4ratings':
      next = document.getElementById('s4size')
      next.focus()
      break;
    case 's4size':
      next = document.getElementById('b4buy')
      next.focus()
      break;
    case 'b4buy':
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
      next = document.getElementById('d4description')
      next.focus()
      break;
  }
}

function prevLink() {
  let next
  switch (document.activeElement.id) {
    case 'd4description':
      break;
    case 'r4ratings':
      next = document.getElementById('d4description')
      next.focus()
      break;
    case 's4size':
      next = document.getElementById('r4ratings')
      next.focus()
      break;
    case 'b4buy':
      next = document.getElementById('s4size')
      next.focus()
      break;
    case 'c4cart':
      next = document.getElementById('b4buy')
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
      break;
  }
}

/* End Key Link Functions */