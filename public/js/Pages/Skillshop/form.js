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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    //get courses count
    this.getCoursesCount(); //get courses list

    this.getCourses(this.pageNum);
  },
  props: {
    errors: {},
    flash: {},
    sysid: null,
    apikey: null
  },
  data: function data() {
    return {
      pagesCount: null,
      paginationCount: 14,
      courses: null,
      courseAdded: false,
      itemsPerPage: 30,
      pageNum: 1,
      priceIndex: 1,
      terms: ['', 'monthly', 'quarterly', 'yearly', 'one time'],
      pricingModels: ['', 'b2c', 'b2b'],
      form: {
        sysid: this.sysid,
        productName: '',
        overview: '',
        selectedCourses: [],
        pricePoints: {},
        sme: '',
        bio: '',
        imgLink: ''
      }
    };
  },
  methods: {
    getCoursesCount: function getCoursesCount() {
      var _this = this;

      axios.get('https://webservices.lightspeedvt.net/REST/V1/courses/count', {
        params: {
          systemId: this.sysid
        },
        headers: {
          'Authorization': 'Basic ' + btoa("".concat(this.apikey, ":lsvt"))
        }
      }).then(function (response) {
        // handle success
        _this.pagesCount = Math.ceil(response.data / 30);
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    },
    getCourses: function () {
      var _getCourses = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pageNum) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('https://webservices.lightspeedvt.net/REST/V1/courses', {
                  params: {
                    systemId: this.sysid,
                    itemsPerPage: this.itemsPerPage,
                    page: pageNum
                  },
                  headers: {
                    'Authorization': 'Basic ' + btoa("".concat(this.apikey, ":lsvt"))
                  }
                }).then(function (response) {
                  // handle success
                  _this2.courses = response.data;
                  console.log(response);
                })["catch"](function (error) {
                  // handle error
                  console.log(error);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCourses(_x) {
        return _getCourses.apply(this, arguments);
      }

      return getCourses;
    }(),
    handleSelectedCourse: function handleSelectedCourse(event, course) {
      //check to see if course has been added
      if (!this.form.selectedCourses.includes(event.target.id)) {
        //if course has not been added, add to selectedCourses array
        this.form.selectedCourses.push(event.target.id); //change button text and bg to green

        this.checkBtnState(); // if removed button clicked, remove from selected courses and change button back to original state
      } else if (this.form.selectedCourses.includes(event.target.id)) {
        var btnIndex = this.form.selectedCourses.indexOf(event.target.id);
        this.form.selectedCourses.splice(btnIndex, 1);
        this.checkBtnState();
      }
    },
    checkBtnState: function checkBtnState() {
      var _this3 = this;

      if (this.$refs.addBtn) {
        this.$refs.addBtn.forEach(function (btn) {
          if (_this3.form.selectedCourses.includes(btn.id)) {
            btn.textContent = "Remove";
            btn.classList.remove('bg-blue-500');
            btn.classList.add('bg-red-500');
            return;
          }

          if (!_this3.form.selectedCourses.includes(btn.id)) {
            btn.textContent = "Add";
            btn.classList.remove('bg-red-500');
            btn.classList.add('bg-blue-500');
            return;
          }
        });
      }
    },
    removeSelectedCourse: function removeSelectedCourse(event, course, index) {
      this.form.selectedCourses.splice(index, 1); //changes button text and background color

      this.$refs.addBtn.forEach(function (btn) {
        if (btn.id == course) {
          btn.innerText = "Add";
          btn.classList.remove('bg-green-400');
          btn.classList.add('bg-blue-500');
        }
      });
    },
    makeSelectPointer: function makeSelectPointer() {
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
    },
    //function makes a new price point container
    makePricePoint: function makePricePoint() {
      var _this4 = this;

      var pricePointContainer = document.querySelector('#price-point-container');
      var pricePointCount = document.querySelectorAll('.price-wrap').length + 1; //new price point wrapper

      var newPricePointWrapper = document.createElement('div');
      newPricePointWrapper.setAttribute('id', 'price-point-wrapper' + pricePointCount);
      newPricePointWrapper.classList.add('container', 'price-wrap', 'flex', 'items-center', 'my-10'); //new price point

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

      var selectPointer = this.makeSelectPointer();
      var termDiv = document.createElement('div');
      termDiv.classList.add('w-full', 'md:w-1/3', 'px-3', 'mb-6', 'md:mb-0');
      var relDiv = document.createElement('div');
      relDiv.className = "relative";
      var termLabel = document.createElement('label');
      termLabel.classList.add('block', 'mb-2');
      termLabel.setAttribute('for', 'pricing-term' + pricePointCount);
      termLabel.textContent = "Term"; //select

      var select = document.createElement('select');
      select.id = "term" + pricePointCount;
      select.classList.add('block', 'appearance-none', 'w-full', 'bg-gray-200', 'border', 'border-gray-200', 'text-gray-700', 'py-3', 'px-4', 'pr-8', 'rounded', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
      this.terms.forEach(function (term) {
        var option = document.createElement('option');
        option.text = term.toUpperCase();
        option.value = term;
        select.appendChild(option);
      });
      relDiv.appendChild(select);
      relDiv.appendChild(this.makeSelectPointer());
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
      pmTermLabel.textContent = "Pricing Model"; //select

      var pmSelect = document.createElement('Select');
      pmSelect.id = "priceModel" + pricePointCount;
      pmSelect.classList.add('block', 'appearance-none', 'w-full', 'bg-gray-200', 'border', 'border-gray-200', 'text-gray-700', 'py-3', 'px-4', 'pr-8', 'rounded', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
      this.pricingModels.forEach(function (term) {
        var option = document.createElement('option');
        option.text = term.toUpperCase();
        option.value = term;
        pmSelect.appendChild(option);
      });
      pmRelDiv.appendChild(pmSelect);
      pmRelDiv.appendChild(selectPointer);
      pmDiv.appendChild(pmTermLabel);
      pmDiv.appendChild(pmRelDiv);
      newPricePointWrapper.appendChild(pmDiv);
      pricePointContainer.appendChild(newPricePointWrapper); //adds new object to form.pricePoint

      var addedPrices = document.querySelectorAll('.price-wrap');
      addedPrices.forEach(function (pricePoint) {
        _this4.form.pricePoints["pricePoint".concat(addedPrices.length)] = {
          price: '',
          term: '',
          pricingModel: ''
        };
      });
    },
    submit: function submit() {
      var _this5 = this;

      //if first price point has values, add those values to pricePoints object
      if (document.querySelector("#price1").value != '' && document.querySelector("#term1").value != '' && document.querySelector("#priceModel1").value != '') {
        var newObj = {
          price: document.querySelector("#price".concat(this.priceIndex)).value,
          term: document.querySelector("#term".concat(this.priceIndex)).value,
          priceModel: document.querySelector("#priceModel".concat(this.priceIndex)).value
        };
        this.form.pricePoints["pricePoint".concat(this.priceIndex)] = newObj;
      }

      Object.entries(this.form.pricePoints).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        //loop through form.pricePoints and assign values dynamically
        var newObj = {
          price: value.price ? document.querySelector("#price".concat(_this5.priceIndex)).value : '',
          term: value.term ? document.querySelector("#term".concat(_this5.priceIndex)).value : '',
          priceModel: value.priceModel ? document.querySelector("#priceModel".concat(_this5.priceIndex)).value : ''
        };
        _this5.form.pricePoints["".concat(key)] = newObj;
        _this5.priceIndex++;
      }); //console.log(this.form.pricePoints)

      this.$inertia.post('/skillshop/form/submit', this.form);
    }
  },
  updated: function updated() {
    this.checkBtnState();

    if (this.errors.productName) {
      console.log(this.errors);
    }
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex justify-center" }, [
    _c(
      "form",
      {
        staticClass: "w-full max-w-2xl",
        attrs: { id: "form-component" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.sysid,
                  expression: "sysid"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "sysid",
                type: "text",
                placeholder: "System Id",
                "aria-label": "System Id"
              },
              domProps: { value: _vm.sysid },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.sysid = $event.target.value
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.sysid
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.sysid[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.productName,
                  expression: "form.productName"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "product-name",
                type: "text",
                placeholder: "Product Name",
                "aria-label": "Product Name"
              },
              domProps: { value: _vm.form.productName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "productName", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.productName
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.productName[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.overview,
                  expression: "form.overview"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "overview",
                cols: "30",
                rows: "10",
                type: "text",
                placeholder: "Overview",
                "aria-label": "Overview"
              },
              domProps: { value: _vm.form.overview },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "overview", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.overview
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.overview[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm.form.selectedCourses.length > 0
          ? _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "p-4 flex flex-column flex-wrap justify-center border-solid border-2 border-gray-600"
                },
                _vm._l(_vm.form.selectedCourses, function(course, index) {
                  return _c(
                    "span",
                    {
                      key: course,
                      staticClass:
                        "bg-gray-400 px-2 py-0 m-2 rounded cursor-pointer",
                      on: {
                        click: function($event) {
                          return _vm.removeSelectedCourse($event, course, index)
                        }
                      }
                    },
                    [
                      _vm._v("X "),
                      _c("span", { staticClass: "ml-2" }, [
                        _vm._v(_vm._s(course))
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("label", { staticClass: "block mb-2", attrs: { for: "" } }, [
          _vm._v("Courses")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "container courses-container flex flex-col my-10 py-10 px-4 border-solid border-2 border-gray-600"
          },
          [
            _c("table", { staticClass: "border-separate table-auto" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.courses, function(course, index) {
                  return _c("tr", { key: index, staticClass: "text-left" }, [
                    _c("td", [
                      _c(
                        "button",
                        {
                          ref: "addBtn",
                          refInFor: true,
                          staticClass:
                            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                          attrs: { id: course.courseId },
                          on: {
                            click: function($event) {
                              return _vm.handleSelectedCourse($event, course)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                            Add\r\n                        "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "pl-6" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(course.courseName) +
                          " \r\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(course.courseId) +
                          "\r\n                    "
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm.errors.selectedCourses
              ? _c("div", { staticClass: "text-red-400 p-2" }, [
                  _vm._v(_vm._s(_vm.errors.selectedCourses[0]))
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.pagesCount > 0
          ? _c(
              "div",
              { staticClass: "container flex", attrs: { id: "pagination" } },
              [
                _c(
                  "nav",
                  { staticClass: "relative z-0 inline-flex shadow-sm" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",
                        attrs: { href: "#", "aria-label": "Previous" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "h-5 w-5",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d:
                                  "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                "clip-rule": "evenodd"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.paginationCount, function(page, index) {
                      return _c(
                        "button",
                        {
                          key: index,
                          staticClass:
                            "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.getCourses(page)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n            " +
                              _vm._s(page) +
                              "\r\n            "
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",
                        attrs: { href: "#", "aria-label": "Next" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "h-5 w-5",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                d:
                                  "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ],
                  2
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          staticClass: "container selected-courses flex flex-col my-10"
        }),
        _vm._v(" "),
        _c("div", { staticClass: "spacer m-24" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "priceContainer flex flex-col",
            attrs: { id: "price-point-container" }
          },
          [
            _c(
              "div",
              {
                staticClass: "container price-wrap flex items-center my-10",
                attrs: { id: "price-point-wrapper1" }
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "block mb-2",
                        attrs: { for: "pricing-term" }
                      },
                      [
                        _vm._v(
                          "\r\n                        Term\r\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative" }, [
                      _c(
                        "select",
                        {
                          staticClass:
                            "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                          attrs: { id: "term1" }
                        },
                        _vm._l(_vm.terms, function(term) {
                          return _c(
                            "option",
                            { key: term.id, domProps: { value: term } },
                            [_vm._v(_vm._s(term.toUpperCase()))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current h-4 w-4",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 pr-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "block mb-2",
                        attrs: { for: "pricing-model" }
                      },
                      [
                        _vm._v(
                          "\r\n                        Pricing Model\r\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative" }, [
                      _c(
                        "select",
                        {
                          staticClass:
                            "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                          attrs: { id: "priceModel1" }
                        },
                        _vm._l(_vm.pricingModels, function(pricingModel) {
                          return _c("option", { key: pricingModel.id }, [
                            _vm._v(
                              "\r\n                        " +
                                _vm._s(pricingModel.toUpperCase()) +
                                "\r\n                        "
                            )
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current h-4 w-4",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "price-btn-container" }, [
          _c(
            "a",
            {
              staticClass:
                "price-point bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer",
              attrs: { id: "price-btn" },
              on: {
                click: function($event) {
                  return _vm.makePricePoint()
                }
              }
            },
            [_vm._v("\r\n                Add New Price Option\r\n            ")]
          )
        ]),
        _vm._v(" "),
        _vm.errors.pricePoints
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.pricePoints[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "spacer m-24" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.sme,
                  expression: "form.sme"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "sme-input",
                type: "text",
                placeholder: "Subject Matter Expert",
                "aria-label": "Subject Matter Expert"
              },
              domProps: { value: _vm.form.sme },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "sme", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.sme
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.sme[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.bio,
                  expression: "form.bio"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "sme-bio",
                cols: "30",
                rows: "10",
                type: "text",
                placeholder: "Bio",
                "aria-label": "Bio"
              },
              domProps: { value: _vm.form.bio },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "bio", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.bio
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.bio[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex items-center border-b border-blue-600 py-2 my-6"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.imgLink,
                  expression: "form.imgLink"
                }
              ],
              staticClass:
                "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
              attrs: {
                id: "sme-image",
                type: "text",
                placeholder: "Image Link",
                "aria-label": "Image Link"
              },
              domProps: { value: _vm.form.imgLink },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "imgLink", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.errors.imgLink
          ? _c("div", { staticClass: "text-red-400 p-2" }, [
              _vm._v(_vm._s(_vm.errors.imgLink[0]))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "sub-btn-container my-10" }, [
          _c(
            "a",
            {
              staticClass:
                "submit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer",
              attrs: { id: "sub-btn", type: "submit" },
              on: {
                click: function($event) {
                  return _vm.submit()
                }
              }
            },
            [_vm._v("\r\n                Submit\r\n            ")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "my-8" }, [
      _vm._v(
        "\r\n        Please fill out the Skill Shop application for system:"
      ),
      _c("span")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "mb-5" }, [
      _c("tr", { staticClass: "text-left" }, [
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "pl-6 pb-10" }, [
          _vm._v(
            "\r\n                        Course Name\r\n                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pb-10" }, [
          _vm._v(
            "\r\n                        Course Id\r\n                    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("tr", [_c("th"), _vm._v(" "), _c("th"), _vm._v(" "), _c("th")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/4 md:w-1/2 mb-6 md:mb-0" }, [
      _c("label", { staticClass: "price-label block mb-2" }, [
        _vm._v("Price Point 1")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",
        attrs: {
          id: "price1",
          type: "number",
          placeholder: "$ Price",
          "aria-label": "Price"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Skillshop/form.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Skillshop/form.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7b9f7cf5& */ "./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Skillshop/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Skillshop/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=7b9f7cf5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Skillshop/form.vue?vue&type=template&id=7b9f7cf5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b9f7cf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!*****************************************************!*\
  !*** multi ./resources/js/Pages/Skillshop/form.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Laravel\code\lsvt\resources\js\Pages\Skillshop\form.vue */"./resources/js/Pages/Skillshop/form.vue");


/***/ })

/******/ });