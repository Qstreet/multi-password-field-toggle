/*!
* multiPassFields.js
* toggle multi password fields to hide/reveal text
* (c) 2019, Qstreet
* MIT License
*/

(function () {
  'use strict';

  // var checkBox = document.querySelector('#show-passwords')
  // var inputNodesArray = Array.prototype.slice.call(document.querySelectorAll('input'))

  // if (checkBox) {

    //   checkBox.addEventListener('change', function (event) {
    //     inputNodesArray.forEach(function (item, index) {
    //       if (item.type === 'checkbox') return;
    //       else if (item.type === 'password') {
    //         item.type = 'text'
    //       } else { item.type = 'password' }
    //     })
    //   }, false)

    // REFACTOR
    var checkBox = document.querySelector('#show-passwords')
    var inputNodesArray = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'))

    // check to see if checkBox exists in DOM
    if (checkBox) {

    // Listener event and callback
    checkBox.addEventListener('change', function (event) {

      // there IS a NodeList.forEach but browswer support is sketchy
      // either use a polyfill or convert to proper array as here
      inputNodesArray.forEach(function (password) {
        if (checkBox.checked) {
          password.type = 'text'
        } else {
          password.type = 'password'
        }
      })

    }, false)

  }
})();