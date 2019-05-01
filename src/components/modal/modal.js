function init(){
    const modal = document.getElementById('construction-modal');
    const buttons = document.getElementsByClassName('under-construction');
    var lastFocusedItem;
    for (var i=0; i < buttons.length; i++){
        //console.log(buttons[i]);
        buttons[i].addEventListener('click', function(){
            lastFocusedItem = this;
            modal.style.display = 'block';
            modal.getElementsByClassName('modal-close')[0].focus();
        });
    }
    const modalClose = document.getElementsByClassName('modal-close');
    for (var i=0; i < modalClose.length; i++){
        //console.log(modalClose[i]);
        modalClose[i].addEventListener('click', function(){
            modal.style.display = 'none';
            lastFocusedItem.focus();
        });
    }
    var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl; 
    if(focusableEls.length > 1)
        lastFocusableEl = focusableEls[focusableEls.length - 1];
    else
        lastFocusableEl = firstFocusableEl;
    const KEYCODE_TAB = 9;
    modal.addEventListener('keydown', function(e){
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
        if (!isTabPressed) { 
            return; 
        }
        if ( e.shiftKey ) {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    })
}
  
export { init };