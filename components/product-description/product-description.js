var AddToCart = function (element) {
  this.element = element;
  this.quantity = 1;
  this.quantityInput = document.getElementById('quantity');
  this.ariaQuantity = this.element.querySelector('.quantity-comp__aria span');
  this.initEvents();
};

AddToCart.prototype = {
  initEvents: function () {
    this.incrementBtn = this.element.querySelector('.quantity-comp__increase');
    this.decrementBtn = this.element.querySelector('.quantity-comp__decrease');
    this.element.addEventListener('submit', this.onFormSubmit.bind(this));
    this.incrementBtn.addEventListener('click', this.increment.bind(this));
    this.decrementBtn.addEventListener('click', this.decrement.bind(this));
  },
  onFormSubmit: function (e) {
    e.preventDefault();
    const formData = {
      name: this.element.querySelector('[name=name]').value,
      quantity: this.element.querySelector('[name=quantity]').value,
      color: this.element.querySelector('[name=color]:checked').value,
      size: this.element.querySelector('[name=size]:checked').value,
      price: this.element.querySelector('[name=price]').value,
      thumbnail_url: this.element.querySelector('[name=thumbnail_url]').value
      //price: 16.99
    };
    const event = new CustomEvent('update:cart', {
      bubbles: true,
      detail: formData
    });
    document.dispatchEvent(event);
    console.log("formData: ", formData);
  },
  increment: function () {
    this.quantity++;
    this.quantityInput.value = this.quantity;
    this.ariaQuantity.innerHTML = this.quantity;
  },
  decrement: function () {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityInput.value = this.quantity;
      this.ariaQuantity.innerHTML = this.quantity;
    }
  }
};


var setUpProduct = function(){
  var productDescriptionTemplate = Handlebars.compile(document.getElementById('product-description-template').innerHTML);
  var compiledHtml = productDescriptionTemplate(window.product_data[0]);
  document.getElementById('product-description').innerHTML = compiledHtml;

  var productForms = document.querySelectorAll('.product-form');
  //console.log("productForms: ", productForms.length);
  productForms.forEach(function (productForm) {
    //console.log("productForms");
    new AddToCart(productForm);
  });
}

setUpProduct();




