import * as breadcrumb from '../../components/breadcrumb/breadcrumb';
import * as productDetails from '../../components/product-details/product-details';
import * as productGallery from '../../components/gallery/gallery';
import * as productForm from '../../components/product-form/product-form';
import * as productDB from '../../js/pouchdb';

(function pdpPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = parseInt(urlParams.get('product_id'));

  if (!product_id) {
    document.querySelector('.error-message').classList.remove('hidden');
    return false;
  }

  function loadProductData() {
    productDB.getSingleRow(product_id).then(function(res) {
      const productData = res.docs[0];
      const breadcrumbs = [
        { label: 'Home', link: '../index.html' },
        { label: productData.category, link: '../plp/index.html' },
        { label: productData.subcategory, link: '../plp/index.html' },
        { label: productData.product_name }
      ];
      breadcrumb.init(breadcrumbs);
      productDetails.init(productData);
      productGallery.init(productData);

      const productFormEl = document.querySelector(
        '[data-component="product-form"]'
      );
      productForm.init(productFormEl);
    });
  }

  productDB.init().then(loadProductData);
})();
