/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/skillshop.js":
/*!***********************************!*\
  !*** ./resources/js/skillshop.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var priceBtn = document.querySelector('#price-btn');
var pricePointContainer = document.querySelector('#price-point-container');

var makeSelectPointer = function makeSelectPointer() {
  var div = document.createElement('div');
  div.classList.add('pointer-events-none', 'absolute', 'inset-y-0', 'right-0', 'flex', 'items-center', 'px-2', 'text-gray-700');
  var svg = document.createElement('svg');
  svg.classList.add('fill-current', 'h-4', 'w-4');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 20 20');
  var path = document.createElement('path');
  path.setAttribute('d', 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z');
  svg.appendChild(path);
  div.appendChild(svg);
  return div;
}; //function makes a new price point container


var makePricePoint = function makePricePoint() {
  var pricePointCount = document.querySelectorAll('.price-container').length + 1; //new price point wrapper

  var newPricePointWrapper = document.createElement('div');
  newPricePointWrapper.setAttribute('id', 'price-point-wrapper' + pricePointCount);
  newPricePointWrapper.classList.add('container', 'price-container', 'flex', 'items-center', 'my-10'); //new price point

  var newPricePoint = document.createElement('div');
  newPricePoint.classList.add('w-1/4', 'md:w-1/2', 'mb-6', 'md:mb-0');
  var pricePointLabel = document.createElement('label');
  pricePointLabel.classList.add('price-label', 'block', 'mb-2');
  pricePointLabel.textContent = "Price Point " + pricePointCount;
  var pricePointInput = document.createElement('input');
  pricePointInput.setAttribute('id', 'price' + pricePointCount);
  pricePointInput.setAttribute('type', 'number');
  pricePointInput.setAttribute('placeholder', '$ Price');
  pricePointInput.setAttribute('aria-label', 'Price' + pricePointCount);
  pricePointInput.classList.add('appearance-none', 'block', 'w-full', 'bg-gray-200', 'text-gray-700', 'border', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white');
  newPricePoint.appendChild(pricePointLabel);
  newPricePoint.appendChild(pricePointInput);
  newPricePointWrapper.appendChild(newPricePoint); //new term

  var selectPointer = makeSelectPointer();
  var termDiv = document.createElement('div');
  termDiv.classList.add('w-full', 'md:w-1/3', 'px-3', 'mb-6', 'md:mb-0');
  var relDiv = document.createElement('div');
  relDiv.className = "relative";
  var termLabel = document.createElement('label');
  termLabel.classList.add('block', 'mb-2');
  termLabel.setAttribute('for', 'pricing-term' + pricePointCount);
  termLabel.textContent = "Term"; //select

  var terms = ['Monthly', 'Quarterly', 'Yearly', 'One-Time'];
  var select = document.createElement('select');
  select.id = "pricing-term" + pricePointCount;
  select.classList.add('block', 'appearance-none', 'w-full', 'bg-gray-200', 'border', 'border-gray-200', 'text-gray-700', 'py-3', 'px-4', 'pr-8', 'rounded', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
  terms.forEach(function (term) {
    var option = document.createElement('option');
    option.text = term;
    option.value = term;
    select.appendChild(option);
  });
  relDiv.appendChild(select);
  relDiv.appendChild(selectPointer);
  termDiv.appendChild(termLabel);
  termDiv.appendChild(relDiv);
  newPricePointWrapper.appendChild(termDiv); //new pricing model

  var pmDiv = document.createElement('div');
  pmDiv.classList.add('w-full', 'md:w-1/3', 'px-3', 'mb-6', 'md:mb-0');
  var pmRelDiv = document.createElement('div');
  pmRelDiv.className = "relative";
  var pmTermLabel = document.createElement('label');
  pmTermLabel.classList.add('block', 'mb-2');
  pmTermLabel.setAttribute('for', 'pricing-model' + pricePointCount);
  pmTermLabel.textContent = "Term"; //select

  var pmTerms = ['B2C', 'B2B'];
  var pmSelect = document.createElement('Select');
  pmSelect.id = "pricing-model" + pricePointCount;
  pmSelect.classList.add('block', 'appearance-none', 'w-full', 'bg-gray-200', 'border', 'border-gray-200', 'text-gray-700', 'py-3', 'px-4', 'pr-8', 'rounded', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
  pmTerms.forEach(function (term) {
    var option = document.createElement('option');
    option.text = term;
    option.value = term;
    pmSelect.appendChild(option);
  });
  pmRelDiv.appendChild(pmSelect);
  pmRelDiv.appendChild(selectPointer);
  pmDiv.appendChild(pmTermLabel);
  pmDiv.appendChild(pmRelDiv);
  newPricePointWrapper.appendChild(pmDiv);
  pricePointContainer.appendChild(newPricePointWrapper);
};

priceBtn.addEventListener('click', function (e) {
  console.log(e);

  if (e.target.id == "price-btn") {
    makePricePoint();
  }
});

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/skillshop.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Laravel\code\lsvt\resources\js\skillshop.js */"./resources/js/skillshop.js");


/***/ })

/******/ });