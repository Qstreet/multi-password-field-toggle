/*!
* multiPassFields.js
* toggle multi password fields to hide/reveal text
* (c) 2019, Qstreet
* MIT License
*/

(function () {
  'use strict';

  var checkBox = document.querySelector('#show-passwords')
  var inputNodesArray = Array.prototype.slice.call(document.querySelectorAll('input'))

  if (checkBox) {
    checkBox.addEventListener('change', function (event) {
      inputNodesArray.forEach(function (item, index) {
        if (item.type === 'checkbox') return;
        else if (item.type === 'password') {
          item.type = 'text'
        } else { item.type = 'password' }
      })
    }, false)
  }
})();