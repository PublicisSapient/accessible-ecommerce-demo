/* Footer Functions */

/**
 * The following group of functions are for validating the subscription email form, but it should be possible to encapsulate the code and extend it for any forms
 * Current approach is to use "Float labels" (https://css-tricks.com/float-labels-css/), but this hasn't been approved by UX or Accessibility :\
 * The float labels are a CSS-only solution though, and the JS code shouln't be affected if a decision is made to not use them
 *
 * General Approach to form validation includes:
 * 1. Form fields don't show errors until the form is submitted
 * 2. If there are errors on submit, the first field with an error will receive focus
 * 3. Any fields with errors will have the error text appended to the input label so it will be read out on focus
 * 4. Once the form has entered a 'validating' state (post submit), *fields that had errors* will be re-validated on blur, and the UI will update accordingly
 */

/**
 * Valid form handler
 * @todo Add success functionality
 * @param  {HTMLFormElement} form - the form element that has been validated
 */
function handleValidForm(form) {
    console.log('%c VALID FORM ', 'background: hotpink; color: white');
}
/**
 * Invalid form handler
 * Puts the focus onto the first field with an error
 * @todo Extend functionality to cover all types of form elements
 * @param  {HTMLInputElement} form - the form element that has been validated
 */
function handleInvalidForm(form){
    form.querySelector('input:invalid').focus();
}
/**
 * Validate single form input
 * Invalid fields will inject the validation message from the <input> element's data-validation-message attribute into the element's label
 * Invalid inputs will get the .has-error class added to them
 * Valid inputs will clear .has-error classes and remove any injected validation messages
 * @todo Extend functionality to cover all types of form elements
 * @todo break message generation/destruction out into separate functions
 * @param  {HTMLInputElement} inputElement - input element being validated
 */
function validateInputElement(inputElement){
    let inputElementLabel = document.querySelector('label[for="'+inputElement.id+'"]');
    if (!inputElement.checkValidity()) {
        if (inputElementLabel.querySelector('.input__validation-message')) return;

        let errorMessage = document.createElement('span');
        errorMessage.innerHTML = " " + inputElement.dataset.validationMessage;
        errorMessage.classList.add('input__validation-message');
        inputElementLabel.appendChild(errorMessage);

        inputElement.classList.add('has-error');
    } else {
        let errorMessage = inputElementLabel.querySelector('.input__validation-message');
        if(errorMessage) errorMessage.parentNode.removeChild(errorMessage);

        inputElement.classList.remove('has-error');
    }
}
/**
 * Loop over form inputs and update the UI based on their validity
 * @param  {HTMLFormElement} form - form being validated
 */
function toggleInputValidityUI(form) {
    form.querySelectorAll('input[type="text"], input[type="email"]').forEach(validateInputElement);
}
/**
 * Adds or removes the helper CSS class .edited to form element.
 * CSS class is added if field has content
 * CSS class is removed if field has no content
 * The .edited class allows for edge-case styling when a field has content but is not valid
 * @param  {HTMLInputElement} inputElement
 */
function markInputAsEdited(inputElement) {
    if (inputElement.value) {
        inputElement.classList.add('edited');
    } else {
        inputElement.classList.remove('edited');
    }
}
/**
 * Prevent standard submit event, validate fields and handle valid/invalid forms accordingly
 * @param  {Event} e - Form 'submit' event
 */
function submitClicked(e){
    e.preventDefault();
    toggleInputValidityUI(this);

    if(!this.checkValidity()){
        handleInvalidForm(this);
    }else{
        //Form is valid - clear any remnants of invalid fields
        handleValidForm(this);
    }
}
/**
 * Loop over all forms and their inputElement children to add validation Event Listeners
 * @todo Extend functionality to cover all types of form inputs
 * @param  {HTMLFormElement} form
 */
let formsToValidate = document.querySelectorAll('[data-validate]');
formsToValidate.forEach(function (form) {
    form.addEventListener('submit', submitClicked);

    form.querySelectorAll('input[type="text"], input[type="email"]').forEach(inputElement => {
        inputElement.addEventListener('blur', ()=>{
            markInputAsEdited(inputElement);
            if(inputElement.classList.contains('has-error')){
                validateInputElement(inputElement)
            }
        });
    });
});