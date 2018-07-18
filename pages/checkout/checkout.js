var billingCheckbox = document.getElementById('same-as-shipping');

function goToAccordionPanel(goToPanel) {
	// event.preventDefault();
	// console.log('HERE');
	// // var accordionPanelContent = closePanel.querySelector('.accordion-panel_content');
	// // var accordionPanelHeading = closePanel.querySelector('.accordion-panel_heading');

	// var openAccordionPanels = document.querySelectorAll('.accordion--open');
	// console.log(openAccordionPanels);
	// openAccordionPanels.forEach(function(openPanel) {
	// 	console.log(openPanel);
	// 	openPanel.classList.remove('accordion--open');
	// });

	onClickToggleAccordionPanel(goToPanel)
}

billingCheckbox.addEventListener('change', function() {
	var billingAddressFields = document.getElementById('billing-address');
	billingAddressFields.classList.toggle('billing-address-hidden');
})

var goToPaymentDetailsButton = document.getElementById('go-to-payment-details');
var shippingAccordionPanel = document.getElementById('shipping-accordion-panel');
var paymentDetailsAccordionPanel = document.getElementById('payment-details-accordion-panel');
goToPaymentDetailsButton.addEventListener('click', goToAccordionPanel(paymentDetailsAccordionPanel));