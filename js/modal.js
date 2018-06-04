// This script from https://www.cssscript.com/fully-accessible-modal-window-with-pure-javascript/
// License: MIT

(function (global) {
    'use strict';
  
    // Helper function to get all focusable children from a node
    function getFocusableChildren (node) {
      var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'];
  
      return $$(focusableElements.join(','), node).filter(function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
      });
    }
  
    // Helper function to get all nodes in context matching selector as an array
    function $$ (selector, context) {
      return Array.prototype.slice.call((context || document).querySelectorAll(selector) || []);
    }
  
    // Helper function trapping the tab key inside a node
    function trapTabKey (node, event) {
      var focusableChildren = getFocusableChildren(node);
      var focusedItemIndex = focusableChildren.indexOf(document.activeElement);
  
      if (event.shiftKey && focusedItemIndex === 0) {
        focusableChildren[focusableChildren.length - 1].focus();
        event.preventDefault();
      } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
        focusableChildren[0].focus();
        event.preventDefault();
      }
    }
  
    // Helper function to focus first focusable item in node
    function setFocusToFirstItem (node) {
      var focusableChildren = getFocusableChildren(node);
      if (focusableChildren.length) focusableChildren[0].focus();
    }
  
    var focusedElementBeforeModal;
  
    /**
     * Modal constructor
     * @param {Node} node - Modal element
     * @param {Node} main - Main element of the page
     */
    var Modal = function (node, main) {
      var that = this;
      main = main || document.querySelector('#main');
      this.shown = false;
  
      $$('[data-modal-show="' + node.id + '"]').forEach(function (opener) {
        opener.addEventListener('click', show);
      });
  
      $$('[data-modal-hide]', node).concat($$('[data-modal-hide="' + node.id + '"]')).forEach(function (closer) {
        closer.addEventListener('click', hide);
      });
  
      document.addEventListener('keydown', function (event) {
        if (that.shown && event.which === 27) {
          event.preventDefault();
          hide();
        }
  
        if (that.shown && event.which === 9) {
          trapTabKey(node, event);
        }
      });
  
      document.body.addEventListener('focus', function (event) {
        if (that.shown && !node.contains(event.target)) {
          setFocusToFirstItem(node);
        }
      }, true);
  
      this.show = show;
      this.hide = hide;
  
      function show () {
        that.shown = true;
        node.setAttribute('aria-hidden', 'false');
        node.setAttribute('aria-expanded', 'true');
        main.setAttribute('aria-hidden', 'true');
        focusedElementBeforeModal = document.activeElement;
        setFocusToFirstItem(node);
      }
  
      function hide () {
        that.shown = false;
        node.setAttribute('aria-hidden', 'true');
        node.setAttribute('aria-expanded', 'false');
        main.setAttribute('aria-hidden', 'false');
        focusedElementBeforeModal.focus();
      }
    };
  
    global.Modal = Modal;
  }(window));
  
var modalEl = document.getElementById('my-accessible-modal');
var mainEl = document.getElementById('main');
var modal = new window.Modal(modalEl, mainEl);