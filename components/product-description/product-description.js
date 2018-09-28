var AddToCart = function (element) {
	this.element = element;

	this.initEvents();
}

AddToCart.prototype = {
	initEvents: function(){
        this.element.addEventListener('submit', this.onFormSubmit.bind(this));
    },
    onFormSubmit: function(e){
        e.preventDefault();
        var formData = {
            name: this.element.querySelector('[name=name]').value,
            quantity: this.element.querySelector('[name=quantity]').value,
            color: this.element.querySelector('[name=color]:checked').value,
            size: this.element.querySelector('[name=size]:checked').value
        };
        var miniCartElement = document.querySelector('.mini-cart');
        var miniCartTotal = miniCartElement.querySelector('.mini-cart__visible-label--amount');
        var miniCartUpdated = miniCartElement.querySelector('.mini-cart__updated');

        const message = `${formData.quantity} ${formData.name} has been added to your cart.`;
        miniCartUpdated.innerHTML = message;
        miniCartTotal.innerHTML = parseInt(miniCartTotal.innerHTML) + 1;
    }
}
var productForms = document.querySelectorAll('.product-form');
productForms.forEach(function (productForm) {
	var newProductForm = new AddToCart(productForm);
});