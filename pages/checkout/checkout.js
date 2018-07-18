var billingCheckbox = document.getElementById('same-as-shipping');

billingCheckbox.addEventListener('change', function() {
	var billingAddressFields = document.getElementById('billing-address');
	billingAddressFields.classList.toggle('billing-address-hidden');
})

var goToPaymentDetailsButton = document.getElementById('go-to-payment-details');
var shippingAccordionPanel = document.getElementById('shipping-accordion-panel');
var paymentDetailsAccordionPanel = document.getElementById('payment-details-accordion-panel');
goToPaymentDetailsButton.addEventListener('click', onClickToggleAccordionPanel(paymentDetailsAccordionPanel));